export interface Material {
  id: string
  title: string
  type: 'video' | 'article' | 'code' | 'download' | 'quiz' | 'exercise'
  duration?: string
  size?: string
  description: string
  isCompleted: boolean
  isLocked: boolean
}

export interface Subtopic {
  id: string
  title: string
  description: string
  materials: Material[]
  isCompleted: boolean
  isLocked: boolean
}

export interface Chapter {
  id: string
  title: string
  description: string
  subtopics: Subtopic[]
  progress: number
  isLocked: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorAvatar: string
  rating: number
  studentsEnrolled: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  chapters: Chapter[]
  totalLessons: number
  completedLessons: number
  xpReward: number
  thumbnail: string
  tags: string[]
}

export const courseData: Course = {
  id: 'cit-101',
  title: 'Computer Information Technology Fundamentals',
  description: 'Master the core concepts of computer information technology, from hardware basics to advanced networking and security. This comprehensive course prepares you for real-world IT challenges.',
  instructor: 'Dr. Sarah Chen',
  instructorAvatar: '/avatars/instructor.jpg',
  rating: 4.9,
  studentsEnrolled: 12847,
  duration: '40 hours',
  level: 'Beginner',
  totalLessons: 48,
  completedLessons: 12,
  xpReward: 2500,
  thumbnail: '/courses/cit-101.jpg',
  tags: ['IT Fundamentals', 'Networking', 'Security', 'Hardware'],
  chapters: [
    {
      id: 'ch-1',
      title: 'Introduction to Computing',
      description: 'Understanding the fundamentals of computer systems and their evolution',
      progress: 100,
      isLocked: false,
      subtopics: [
        {
          id: 'st-1-1',
          title: 'History of Computing',
          description: 'From mechanical calculators to modern supercomputers',
          isCompleted: true,
          isLocked: false,
          materials: [
            {
              id: 'm-1-1-1',
              title: 'The Evolution of Computers',
              type: 'video',
              duration: '15 min',
              description: 'A visual journey through computing history from ENIAC to quantum computers.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-1-1-2',
              title: 'Timeline Interactive Guide',
              type: 'article',
              duration: '10 min read',
              description: 'Interactive timeline exploring major milestones in computing.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-1-1-3',
              title: 'Computing Pioneers Quiz',
              type: 'quiz',
              description: 'Test your knowledge about the pioneers of computing.',
              isCompleted: true,
              isLocked: false
            }
          ]
        },
        {
          id: 'st-1-2',
          title: 'Computer Architecture Basics',
          description: 'Understanding CPU, memory, and storage fundamentals',
          isCompleted: true,
          isLocked: false,
          materials: [
            {
              id: 'm-1-2-1',
              title: 'Inside a Computer',
              type: 'video',
              duration: '22 min',
              description: 'Detailed walkthrough of computer components and how they work together.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-1-2-2',
              title: 'CPU Architecture Deep Dive',
              type: 'article',
              duration: '15 min read',
              description: 'Understanding processors, cores, and instruction sets.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-1-2-3',
              title: 'Hardware Identification Lab',
              type: 'exercise',
              duration: '30 min',
              description: 'Virtual lab to identify and understand hardware components.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-1-2-4',
              title: 'Component Reference Sheet',
              type: 'download',
              size: '2.4 MB',
              description: 'Printable reference guide for hardware components.',
              isCompleted: false,
              isLocked: false
            }
          ]
        }
      ]
    },
    {
      id: 'ch-2',
      title: 'Operating Systems',
      description: 'Explore how operating systems manage hardware and software resources',
      progress: 75,
      isLocked: false,
      subtopics: [
        {
          id: 'st-2-1',
          title: 'OS Fundamentals',
          description: 'Core concepts of operating system design and function',
          isCompleted: true,
          isLocked: false,
          materials: [
            {
              id: 'm-2-1-1',
              title: 'What is an Operating System?',
              type: 'video',
              duration: '18 min',
              description: 'Introduction to OS concepts, types, and their role in computing.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-2-1-2',
              title: 'Process Management',
              type: 'article',
              duration: '12 min read',
              description: 'How operating systems handle processes and multitasking.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-2-1-3',
              title: 'Process Scheduler Simulation',
              type: 'code',
              duration: '45 min',
              description: 'Interactive code exercise simulating process scheduling algorithms.',
              isCompleted: true,
              isLocked: false
            }
          ]
        },
        {
          id: 'st-2-2',
          title: 'File Systems & Storage',
          description: 'Understanding how data is organized and stored',
          isCompleted: false,
          isLocked: false,
          materials: [
            {
              id: 'm-2-2-1',
              title: 'File System Types Explained',
              type: 'video',
              duration: '20 min',
              description: 'NTFS, ext4, APFS, and more - understanding file system architecture.',
              isCompleted: true,
              isLocked: false
            },
            {
              id: 'm-2-2-2',
              title: 'Storage Technologies',
              type: 'article',
              duration: '14 min read',
              description: 'From HDDs to SSDs to NVMe - modern storage solutions.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-2-2-3',
              title: 'Disk Management Exercise',
              type: 'exercise',
              duration: '35 min',
              description: 'Hands-on practice with disk partitioning and formatting.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-2-2-4',
              title: 'File Systems Cheat Sheet',
              type: 'download',
              size: '1.8 MB',
              description: 'Quick reference guide comparing different file systems.',
              isCompleted: false,
              isLocked: false
            }
          ]
        },
        {
          id: 'st-2-3',
          title: 'Memory Management',
          description: 'Virtual memory, paging, and memory allocation',
          isCompleted: false,
          isLocked: false,
          materials: [
            {
              id: 'm-2-3-1',
              title: 'Virtual Memory Explained',
              type: 'video',
              duration: '25 min',
              description: 'How operating systems use virtual memory for efficient resource management.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-2-3-2',
              title: 'Memory Allocation Algorithms',
              type: 'code',
              duration: '50 min',
              description: 'Implement and visualize different memory allocation strategies.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-2-3-3',
              title: 'Memory Management Quiz',
              type: 'quiz',
              description: 'Test your understanding of memory management concepts.',
              isCompleted: false,
              isLocked: false
            }
          ]
        }
      ]
    },
    {
      id: 'ch-3',
      title: 'Networking Fundamentals',
      description: 'Learn how computers communicate and share resources',
      progress: 0,
      isLocked: false,
      subtopics: [
        {
          id: 'st-3-1',
          title: 'Network Basics',
          description: 'Introduction to computer networks and protocols',
          isCompleted: false,
          isLocked: false,
          materials: [
            {
              id: 'm-3-1-1',
              title: 'Introduction to Networking',
              type: 'video',
              duration: '28 min',
              description: 'Understanding LANs, WANs, and the basics of network communication.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-1-2',
              title: 'The OSI Model',
              type: 'article',
              duration: '20 min read',
              description: 'Comprehensive guide to the 7 layers of the OSI model.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-1-3',
              title: 'Network Packet Tracer',
              type: 'exercise',
              duration: '40 min',
              description: 'Visualize how data packets travel through a network.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-1-4',
              title: 'OSI Model Poster',
              type: 'download',
              size: '3.2 MB',
              description: 'High-quality printable poster of the OSI model.',
              isCompleted: false,
              isLocked: false
            }
          ]
        },
        {
          id: 'st-3-2',
          title: 'TCP/IP Protocol Suite',
          description: 'Deep dive into internet protocols',
          isCompleted: false,
          isLocked: false,
          materials: [
            {
              id: 'm-3-2-1',
              title: 'TCP/IP Explained',
              type: 'video',
              duration: '32 min',
              description: 'Understanding the protocol stack that powers the internet.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-2-2',
              title: 'IP Addressing & Subnetting',
              type: 'article',
              duration: '25 min read',
              description: 'Master IP addressing, subnet masks, and CIDR notation.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-2-3',
              title: 'Subnet Calculator Lab',
              type: 'code',
              duration: '60 min',
              description: 'Build your own subnet calculator while learning subnetting.',
              isCompleted: false,
              isLocked: false
            },
            {
              id: 'm-3-2-4',
              title: 'Protocol Quiz',
              type: 'quiz',
              description: 'Challenge yourself on TCP/IP protocols and addressing.',
              isCompleted: false,
              isLocked: false
            }
          ]
        }
      ]
    },
    {
      id: 'ch-4',
      title: 'Cybersecurity Essentials',
      description: 'Protect systems and data from threats and vulnerabilities',
      progress: 0,
      isLocked: true,
      subtopics: [
        {
          id: 'st-4-1',
          title: 'Security Fundamentals',
          description: 'Core principles of information security',
          isCompleted: false,
          isLocked: true,
          materials: [
            {
              id: 'm-4-1-1',
              title: 'CIA Triad & Security Principles',
              type: 'video',
              duration: '22 min',
              description: 'Understanding confidentiality, integrity, and availability.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-4-1-2',
              title: 'Common Threats & Attacks',
              type: 'article',
              duration: '18 min read',
              description: 'Overview of malware, phishing, social engineering, and more.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-4-1-3',
              title: 'Threat Assessment Exercise',
              type: 'exercise',
              duration: '45 min',
              description: 'Identify and classify security threats in real scenarios.',
              isCompleted: false,
              isLocked: true
            }
          ]
        },
        {
          id: 'st-4-2',
          title: 'Cryptography Basics',
          description: 'Encryption, hashing, and secure communication',
          isCompleted: false,
          isLocked: true,
          materials: [
            {
              id: 'm-4-2-1',
              title: 'Introduction to Cryptography',
              type: 'video',
              duration: '30 min',
              description: 'Symmetric vs asymmetric encryption, hashing, and digital signatures.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-4-2-2',
              title: 'Encryption Playground',
              type: 'code',
              duration: '55 min',
              description: 'Implement basic encryption algorithms and see them in action.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-4-2-3',
              title: 'Cryptography Reference',
              type: 'download',
              size: '4.1 MB',
              description: 'Comprehensive guide to cryptographic algorithms and best practices.',
              isCompleted: false,
              isLocked: true
            }
          ]
        }
      ]
    },
    {
      id: 'ch-5',
      title: 'Database Management',
      description: 'Store, retrieve, and manage data effectively',
      progress: 0,
      isLocked: true,
      subtopics: [
        {
          id: 'st-5-1',
          title: 'Database Concepts',
          description: 'Understanding relational and non-relational databases',
          isCompleted: false,
          isLocked: true,
          materials: [
            {
              id: 'm-5-1-1',
              title: 'Introduction to Databases',
              type: 'video',
              duration: '24 min',
              description: 'What are databases and why do we need them?',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-5-1-2',
              title: 'SQL vs NoSQL',
              type: 'article',
              duration: '15 min read',
              description: 'Comparing different database paradigms and when to use each.',
              isCompleted: false,
              isLocked: true
            }
          ]
        },
        {
          id: 'st-5-2',
          title: 'SQL Fundamentals',
          description: 'Master the query language for databases',
          isCompleted: false,
          isLocked: true,
          materials: [
            {
              id: 'm-5-2-1',
              title: 'SQL Basics',
              type: 'video',
              duration: '35 min',
              description: 'SELECT, INSERT, UPDATE, DELETE - core SQL operations.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-5-2-2',
              title: 'SQL Playground',
              type: 'code',
              duration: '90 min',
              description: 'Interactive SQL environment with guided exercises.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-5-2-3',
              title: 'SQL Cheat Sheet',
              type: 'download',
              size: '1.5 MB',
              description: 'Quick reference for common SQL commands and syntax.',
              isCompleted: false,
              isLocked: true
            },
            {
              id: 'm-5-2-4',
              title: 'SQL Mastery Quiz',
              type: 'quiz',
              description: 'Put your SQL skills to the test.',
              isCompleted: false,
              isLocked: true
            }
          ]
        }
      ]
    }
  ]
}
