import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Linkedin } from 'lucide-react';

// Custom LeetCode Icon Component using image
const LeetCodeIcon = ({ className }) => (
  <img 
    className={className}
    width="24" 
    height="24" 
    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" 
    alt="LeetCode"
  />
);

// Custom GeeksforGeeks Icon Component using image
const GeeksforGeeksIcon = ({ className }) => (
  <img 
    className={className}
    width="48" 
    height="48" 
    src="https://img.icons8.com/color/48/GeeksforGeeks.png" 
    alt="GeeksforGeeks"
  />
);

// Custom GitHub Icon Component using image
const GitHubIcon = ({ className }) => (
  <img 
    className={className}
    width="64" 
    height="64" 
    src="https://img.icons8.com/glyph-neue/64/github.png" 
    alt="GitHub"
    style={{ filter: 'invert(1)' }} // Make it white
  />
);

/**
 * Configuration for bubble orbit and interaction behavior
 * 
 * Key principles:
 * - Each bubble has a fixed "home position" on a circular orbit
 * - Bubbles are evenly distributed using polar coordinates (angle = 2π * index / total)
 * - On cursor approach, bubbles smoothly displace away from cursor while tethered to home
 * - All animations use Framer Motion's animate prop - NO re-rendering on mouse events
 * - Bubbles maintain minimum distance from each other and never overlap the profile image
 */
const CONFIG = {
  orbitRadius: 240, // Fixed orbit radius from photo center (pixels) - optimized for perfect circle
  bubbleSize: 96, // Bubble diameter (w-24 h-24 = 96px)
  hoverRepulsionRadius: 180, // Cursor detection radius - when to start repulsion
  hoverRepulsionStrength: 70, // Maximum displacement from home position (pixels)
  minBubbleDistance: 100, // Minimum spacing between adjacent bubbles
  animationDuration: 0.5, // Smooth transition duration (seconds)
  animationEasing: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
};

/**
 * Format large numbers to K format (e.g., 3500 -> 3.5K)
 */
const formatCount = (count) => {
  if (!count) return '0';
  const num = parseInt(count);
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const FloatingDroplets = () => {
  // API data state
  const [youtubeStats, setYoutubeStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [geeksforgeeksStats, setGeeksforgeeksStats] = useState(null);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mouse position state - only for calculating displacement, not for re-rendering bubbles
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  
  // Container reference for positioning calculations
  const containerRef = useRef(null);
  
  // Orbit center coordinates (relative to container)
  const [orbitCenter, setOrbitCenter] = useState({ x: 0, y: 0 });

  /**
   * Fetch all platform statistics on component mount
   * This happens ONCE - bubbles remain stable regardless of API state
   */
  useEffect(() => {
    const fetchAllStats = async () => {
      try {
        // Fetch YouTube stats
        try {
          const youtubeResponse = await fetch(
            'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCGuAwCxx0srdoTOLe1_RbJA&key=AIzaSyBOsBZlQZSl376KApPlN6Cb5gD5XQBFIDY'
          );
          const youtubeData = await youtubeResponse.json();
          if (youtubeData.items && youtubeData.items.length > 0) {
            setYoutubeStats(youtubeData.items[0].statistics);
          }
        } catch (error) {
          console.error('Error fetching YouTube stats:', error);
        }

        // Fetch LeetCode stats (using CORS proxy)
        try {
          const leetcodeUrl = encodeURIComponent('https://leetcode-api-pied.vercel.app/user/1Coder_skm');
          const leetcodeResponse = await fetch(
            `https://api.allorigins.win/get?url=${leetcodeUrl}`
          );
          const leetcodeProxyData = await leetcodeResponse.json();
          if (leetcodeProxyData.contents) {
            const leetcodeData = JSON.parse(leetcodeProxyData.contents);
            if (leetcodeData.submitStats) {
              setLeetcodeStats(leetcodeData.submitStats);
            }
          }
        } catch (error) {
          console.error('Error fetching LeetCode stats:', error);
        }

        // Fetch GeeksforGeeks stats (using CORS proxy)
        try {
          const gfgUrl = encodeURIComponent('https://gfg-stats.tashif.codes/6868shivamkumarmaurya');
          const gfgResponse = await fetch(
            `https://api.allorigins.win/get?url=${gfgUrl}`
          );
          const gfgProxyData = await gfgResponse.json();
          if (gfgProxyData.contents) {
            const gfgData = JSON.parse(gfgProxyData.contents);
            if (gfgData.totalProblemsSolved) {
              setGeeksforgeeksStats(gfgData);
            }
          }
        } catch (error) {
          console.error('Error fetching GeeksforGeeks stats:', error);
        }

        // Fetch GitHub stats (using CORS proxy)
        try {
          const githubUrl = encodeURIComponent('https://github-contributions-api.jogruber.de/v4/1Coder-Shivam');
          const githubResponse = await fetch(
            `https://api.allorigins.win/get?url=${githubUrl}`
          );
          const githubProxyData = await githubResponse.json();
          if (githubProxyData.contents) {
            const githubData = JSON.parse(githubProxyData.contents);
            if (githubData.total) {
              setGithubStats(githubData);
            }
          }
        } catch (error) {
          console.error('Error fetching GitHub stats:', error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchAllStats();
  }, []);

  /**
   * Calculate orbit center position (photo area center)
   * This runs once after data loads and when window resizes
   */
  useEffect(() => {
    if (loading) return;

    const calculateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Photo is in the right column - center at 75% width, 50% height
        setOrbitCenter({
          x: rect.width * 0.75,
          y: rect.height * 0.5,
        });
      }
    };

    // Calculate after data loads
    const timer = setTimeout(calculateCenter, 100);

    // Recalculate on window resize
    window.addEventListener('resize', calculateCenter);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateCenter);
    };
  }, [loading]);

  /**
   * Track mouse position relative to container
   * This state update does NOT cause bubbles to re-render - only animates them
   */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseLeave = () => {
      // When cursor leaves, bubbles return to home positions
      setMousePos({ x: null, y: null });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  /**
   * Define bubble data with platform-specific themes
   * This is stable and only depends on API data - bubbles never unmount
   */
  const dropletsData = useMemo(() => {
    if (!youtubeStats && !leetcodeStats && !geeksforgeeksStats && !githubStats) {
      return [];
    }

    return [
      // YouTube Views
      {
        id: 1,
        label: 'YouTube Views',
        value: youtubeStats ? formatCount(youtubeStats.viewCount) : '...',
        icon: Eye,
        theme: {
          gradient: 'from-red-500 to-red-600',
          shadow: 'shadow-red-500/50',
          border: 'border-red-400',
          borderFull: 'border-red-400',
          glow: 'rgba(239, 68, 68, 0.6)',
          glowHover: 'rgba(239, 68, 68, 0.9)',
        },
      },
      // YouTube Subscribers
      {
        id: 2,
        label: 'YouTube Subscribers',
        value: youtubeStats ? youtubeStats.subscriberCount : '...',
        icon: Users,
        theme: {
          gradient: 'from-red-500 to-red-600',
          shadow: 'shadow-red-500/50',
          border: 'border-red-400',
          borderFull: 'border-red-400',
          glow: 'rgba(239, 68, 68, 0.6)',
          glowHover: 'rgba(239, 68, 68, 0.9)',
        },
      },
      // LeetCode
      {
        id: 3,
        label: 'LeetCode Problems',
        value: leetcodeStats ? leetcodeStats.acSubmissionNum[0]?.count || '...' : '...',
        icon: LeetCodeIcon,
        theme: {
          gradient: 'from-yellow-500 to-orange-500',
          shadow: 'shadow-orange-500/50',
          border: 'border-orange-400',
          borderFull: 'border-orange-400',
          glow: 'rgba(249, 115, 22, 0.6)',
          glowHover: 'rgba(249, 115, 22, 0.9)',
        },
      },
      // GeeksforGeeks
      {
        id: 4,
        label: 'GeeksforGeeks Problems',
        value: geeksforgeeksStats ? geeksforgeeksStats.totalProblemsSolved : '...',
        icon: GeeksforGeeksIcon,
        theme: {
          gradient: 'from-green-500 to-emerald-600',
          shadow: 'shadow-green-500/50',
          border: 'border-green-400',
          borderFull: 'border-green-400',
          glow: 'rgba(34, 197, 94, 0.6)',
          glowHover: 'rgba(34, 197, 94, 0.9)',
        },
      },
      // GitHub Contributions
      {
        id: 5,
        label: 'GitHub Contributions',
        value: githubStats && githubStats.total 
          ? Object.values(githubStats.total).reduce((sum, count) => sum + count, 0).toString()
          : '...',
        icon: GitHubIcon,
        theme: {
          gradient: 'from-purple-500 to-indigo-600',
          shadow: 'shadow-purple-500/50',
          border: 'border-purple-400',
          borderFull: 'border-purple-400',
          glow: 'rgba(168, 85, 247, 0.6)',
          glowHover: 'rgba(168, 85, 247, 0.9)',
        },
      },
      // LinkedIn Followers
      {
        id: 6,
        label: 'LinkedIn Followers',
        value: '12.7K',
        icon: Linkedin,
        theme: {
          gradient: 'from-blue-500 to-blue-700',
          shadow: 'shadow-blue-500/50',
          border: 'border-blue-400',
          borderFull: 'border-blue-400',
          glow: 'rgba(59, 130, 246, 0.6)',
          glowHover: 'rgba(59, 130, 246, 0.9)',
        },
      },
    ];
  }, [youtubeStats, leetcodeStats, geeksforgeeksStats, githubStats]);

  /**
   * Calculate home positions using polar coordinates
   * Each bubble is evenly spaced on a circular orbit (angle = 2π * i / total)
   * This calculation is stable and memoized - positions never change
   */
  const bubbleHomePositions = useMemo(() => {
    if (dropletsData.length === 0 || orbitCenter.x === 0) return [];

    return dropletsData.map((_, index) => {
      // Evenly distribute bubbles using polar coordinates
      // Start from top (-π/2) for better visual distribution
      const angle = (2 * Math.PI * index) / dropletsData.length - Math.PI / 2;
      const x = orbitCenter.x + Math.cos(angle) * CONFIG.orbitRadius;
      const y = orbitCenter.y + Math.sin(angle) * CONFIG.orbitRadius;
      
      return { x, y, angle };
    });
  }, [dropletsData.length, orbitCenter]);

  /**
   * Calculate current bubble positions with cursor repulsion
   * When cursor is near, bubbles displace away from cursor BUT remain tethered to home
   * 
   * Logic:
   * 1. Calculate distance from cursor to bubble's home position
   * 2. If within repulsion radius, calculate displacement vector
   * 3. Displacement strength decreases with distance (inverse square)
   * 4. Also check distance from other bubbles to maintain separation
   * 5. Final position = home + displacement (smooth animation via Framer Motion)
   */
  const bubbleCurrentPositions = useMemo(() => {
    if (bubbleHomePositions.length === 0) return [];

    return bubbleHomePositions.map((home, index) => {
      // Start at home position
      let targetX = home.x;
      let targetY = home.y;

      // Apply cursor repulsion if cursor is present and nearby
      if (mousePos.x !== null && mousePos.y !== null) {
        const dx = home.x - mousePos.x;
        const dy = home.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONFIG.hoverRepulsionRadius && distance > 0) {
          // Calculate repulsion strength (stronger when closer)
          const repulsionFactor = 1 - (distance / CONFIG.hoverRepulsionRadius);
          const displacement = CONFIG.hoverRepulsionStrength * repulsionFactor;

          // Normalize direction and apply displacement
          targetX = home.x + (dx / distance) * displacement;
          targetY = home.y + (dy / distance) * displacement;
        }
      }

      // Additional separation: check distance from other bubbles
      // If too close to another bubble, push away slightly
      bubbleHomePositions.forEach((otherHome, otherIndex) => {
        if (index === otherIndex) return;

        const dx = targetX - otherHome.x;
        const dy = targetY - otherHome.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONFIG.minBubbleDistance && distance > 0) {
          // Push away from other bubble
          const pushStrength = (CONFIG.minBubbleDistance - distance) / 2;
          targetX += (dx / distance) * pushStrength;
          targetY += (dy / distance) * pushStrength;
        }
      });

      return { x: targetX, y: targetY };
    });
  }, [bubbleHomePositions, mousePos]);

  if (loading || dropletsData.length === 0) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-visible"
    >
      {dropletsData.map((droplet, index) => (
        <Bubble
          key={droplet.id}
          droplet={droplet}
          position={bubbleCurrentPositions[index]}
          index={index}
        />
      ))}
    </div>
  );
};

/**
 * Individual Bubble Component
 * 
 * Key features:
 * - Receives target position from parent
 * - Uses Framer Motion's animate prop for smooth transitions (NO re-rendering)
 * - Maintains stable component - never unmounts during mouse movement
 * - Independent animation timing for each bubble
 * - Hover effects only scale and show tooltip - position changes via parent
 */
const Bubble = ({ droplet, position, index }) => {
  const Icon = droplet.icon;
  
  // Determine if tooltip should appear above (for bottom bubbles) or below (default)
  const isBottomHalf = position && position.y > (typeof window !== 'undefined' ? window.innerHeight * 0.6 : 500);

  if (!position) return null;

  return (
    <motion.div
      className="absolute pointer-events-auto z-20"
      style={{
        left: 0,
        top: 0,
        zIndex: 20 + index,
      }}
      // Animate position changes smoothly - this is the key to no re-rendering
      animate={{
        x: position.x - CONFIG.bubbleSize / 2, // Center the bubble
        y: position.y - CONFIG.bubbleSize / 2,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 25,
        mass: 0.8,
      }}
      // Initial state - fade in from home position
      initial={{
        x: position.x - CONFIG.bubbleSize / 2,
        y: position.y - CONFIG.bubbleSize / 2,
        scale: 0,
        opacity: 0,
      }}
      // Appear animation - staggered by index
      whileInView={{
        scale: 1,
        opacity: 0.95,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      // Hover effect - only scale, don't change z-index
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.2 },
      }}
      // Drag enabled for manual interaction
      drag
      dragElastic={0.3}
      dragMomentum={false}
    >
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main bubble with platform-specific gradient */}
        <motion.div
          className={`w-24 h-24 bg-gradient-to-br ${droplet.theme.gradient} rounded-full shadow-2xl ${droplet.theme.shadow} flex flex-col items-center justify-center backdrop-blur-sm border-2 ${droplet.theme.border}`}
          animate={{
            boxShadow: [
              `0 0 25px ${droplet.theme.glow}`,
              `0 0 45px ${droplet.theme.glowHover}`,
              `0 0 25px ${droplet.theme.glow}`,
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Icon */}
          <div className="w-7 h-7 mb-1 flex items-center justify-center">
            {droplet.id === 3 || droplet.id === 4 || droplet.id === 5 ? (
              <Icon className="w-7 h-7" />
            ) : (
              <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
            )}
          </div>
          
          {/* Value */}
          <span className="text-sm font-bold text-white">{droplet.value}</span>
        </motion.div>

        {/* Pulsing glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${droplet.theme.gradient} rounded-full blur-2xl opacity-50 pointer-events-none`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Tooltip on hover - shows platform name and value */}
        <div className={`absolute ${isBottomHalf ? '-top-14' : '-bottom-14'} left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30`}>
          <div className={`bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${droplet.theme.border} border shadow-2xl`}>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs opacity-80">{droplet.label}</span>
              <span className="text-lg font-bold">{droplet.value}</span>
            </div>
          </div>
          {/* Tooltip arrow - flips based on position */}
          <div className={`absolute ${isBottomHalf ? '-bottom-1 rotate-[225deg]' : '-top-1 rotate-45'} left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 ${droplet.theme.border} border-t border-l`}></div>
        </div>

        {/* Ripple effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-full border-3 ${droplet.theme.borderFull} pointer-events-none`}
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{
            scale: 1.6,
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingDroplets;
