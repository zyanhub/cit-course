export interface Part {
  id: string
  title: string
  explanation: string
  example: {
    type: 'code' | 'concept'
    language?: string
    content: string
  }
  keyPoints: string[]
  isCompleted: boolean
}

export interface Chapter {
  id: string
  number: number
  title: string
  description: string
  parts: Part[]
  isLocked: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  chapters: Chapter[]
}

export const courseData: Course = {
  id: 'cit-101',
  title: 'CIT - Computer Information Technology',
  description: 'This platform is built for educational purposes to provide free IT learning resources.',
  instructor: 'Dev Hub',
  chapters: [
    {
      id: 'ch-1',
      number: 1,
      title: 'Introduction to IT',
      description: 'Understanding the fundamentals of Information Technology and its role in modern society',
      isLocked: false,
      parts: [
        {
          id: 'ch1-p1',
          title: 'What is IT',
          explanation: `Information Technology (IT) refers to the use of computers, storage, networking, and other physical devices, infrastructure, and processes to create, process, store, secure, and exchange all forms of electronic data. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.

The commercial use of IT encompasses both computer technology and telecommunications. IT professionals perform a variety of functions that range from installing applications to designing complex computer networks and information databases. Some of the duties that IT professionals perform may include data management, networking, engineering computer hardware, database and software design, as well as the management and administration of entire systems.

Information Technology has revolutionized the way we live, work, and communicate. From simple tasks like sending emails to complex operations like managing global supply chains, IT has become an integral part of every aspect of modern life. Understanding IT is essential for anyone looking to thrive in today's digital economy.`,
          example: {
            type: 'concept',
            content: `Examples of IT in everyday life:
- Email and instant messaging for communication
- Online banking and financial transactions
- E-commerce websites like Amazon
- Social media platforms
- Cloud storage services like Google Drive
- Video conferencing tools like Zoom
- Smart home devices and IoT`
          },
          keyPoints: [
            'IT encompasses all forms of technology used to create, store, exchange, and use information',
            'IT includes hardware, software, telecommunications, and all related services',
            'IT professionals manage and maintain technology systems',
            'IT has transformed how businesses operate and people communicate',
            'Understanding IT is essential for modern careers'
          ],
          isCompleted: false
        },
        {
          id: 'ch1-p2',
          title: 'History of Computers',
          explanation: `The history of computers dates back thousands of years with the invention of the abacus, but electronic computing began in the 20th century. The journey from room-sized machines to pocket-sized smartphones represents one of humanity's greatest technological achievements.

The First Generation (1940-1956) used vacuum tubes for circuitry and magnetic drums for memory. These computers were enormous, taking up entire rooms. The ENIAC (Electronic Numerical Integrator and Computer) was one of the first general-purpose electronic computers, weighing 30 tons and using 18,000 vacuum tubes.

The Second Generation (1956-1963) replaced vacuum tubes with transistors, making computers smaller, faster, and more energy-efficient. The Third Generation (1964-1971) introduced integrated circuits, packing multiple transistors onto a single chip. The Fourth Generation (1971-Present) brought microprocessors, enabling personal computers and eventually smartphones.

Today, we are entering the Fifth Generation, characterized by artificial intelligence, quantum computing, and unprecedented processing power.`,
          example: {
            type: 'concept',
            content: `Timeline of Computing Milestones:
1943 - ENIAC development begins
1951 - UNIVAC I, first commercial computer
1964 - IBM System/360, modular computing
1971 - Intel 4004, first microprocessor
1975 - Altair 8800, first personal computer kit
1981 - IBM PC launched
1984 - Apple Macintosh with GUI
1991 - World Wide Web goes public
2007 - First iPhone released
2020s - AI and quantum computing advances`
          },
          keyPoints: [
            'First computers used vacuum tubes and filled entire rooms',
            'Transistors made computers smaller and more reliable',
            'Integrated circuits enabled modern computing',
            'Microprocessors led to personal computers',
            'Modern computing is evolving toward AI and quantum technologies'
          ],
          isCompleted: false
        },
        {
          id: 'ch1-p3',
          title: 'Hardware Basics',
          explanation: `Computer hardware refers to the physical components that make up a computer system. Understanding hardware is fundamental to IT as it forms the foundation upon which all software runs. Hardware can be categorized into several key components, each serving a specific purpose.

The Central Processing Unit (CPU) is often called the "brain" of the computer. It performs calculations and executes instructions from programs. Modern CPUs contain billions of transistors and can perform billions of operations per second. Popular CPU manufacturers include Intel and AMD.

Memory comes in two main types: RAM (Random Access Memory) and storage. RAM is volatile memory used for active tasks and is cleared when the computer shuts down. Storage devices like SSDs and HDDs hold data permanently. The motherboard connects all components, while the Power Supply Unit (PSU) provides electrical power. Graphics Processing Units (GPUs) handle visual rendering and are crucial for gaming, video editing, and AI applications.`,
          example: {
            type: 'concept',
            content: `Main Hardware Components:

CPU (Central Processing Unit)
├── Performs calculations
├── Executes program instructions
└── Measured in GHz (speed)

Memory
├── RAM: Fast, temporary storage (8GB-64GB typical)
└── Storage: Permanent data (SSD/HDD, 256GB-4TB)

Motherboard
├── Connects all components
├── Contains BIOS/UEFI
└── Has expansion slots

GPU (Graphics Card)
├── Renders images and video
├── Essential for gaming/design
└── Used in AI/ML workloads`
          },
          keyPoints: [
            'CPU processes instructions and performs calculations',
            'RAM provides fast temporary memory for active tasks',
            'Storage devices (SSD/HDD) hold data permanently',
            'Motherboard connects and coordinates all components',
            'GPU handles graphics rendering and parallel processing'
          ],
          isCompleted: false
        },
        {
          id: 'ch1-p4',
          title: 'Software Types',
          explanation: `Software is a collection of instructions and data that tell a computer how to work. Unlike hardware, software cannot be physically touched. Software can be broadly categorized into system software and application software, each serving different purposes in the computing ecosystem.

System Software includes operating systems (Windows, macOS, Linux), device drivers, and utility programs. Operating systems manage hardware resources and provide services for application software. Device drivers allow the OS to communicate with hardware components like printers and graphics cards. Utility software helps maintain and optimize the computer system.

Application Software includes programs designed for end-users to perform specific tasks. This category includes productivity software (Microsoft Office, Google Workspace), web browsers (Chrome, Firefox), media players, games, and specialized applications like CAD software or accounting programs. Modern software development has also given rise to cloud-based applications that run in web browsers.`,
          example: {
            type: 'code',
            language: 'text',
            content: `Software Classification:

SYSTEM SOFTWARE
├── Operating Systems
│   ├── Windows 11
│   ├── macOS Sonoma
│   └── Ubuntu Linux
├── Device Drivers
│   ├── Graphics drivers
│   ├── Printer drivers
│   └── Network drivers
└── Utilities
    ├── Antivirus software
    ├── Disk defragmenters
    └── Backup tools

APPLICATION SOFTWARE
├── Productivity
│   ├── Microsoft Word
│   ├── Excel
│   └── PowerPoint
├── Creativity
│   ├── Adobe Photoshop
│   ├── Premiere Pro
│   └── Illustrator
└── Communication
    ├── Slack
    ├── Zoom
    └── Email clients`
          },
          keyPoints: [
            'System software manages hardware and provides platform for applications',
            'Operating systems are the most important system software',
            'Application software helps users perform specific tasks',
            'Drivers enable communication between OS and hardware',
            'Cloud-based software runs through web browsers'
          ],
          isCompleted: false
        },
        {
          id: 'ch1-p5',
          title: 'Input/Output Devices',
          explanation: `Input and output devices are essential components that allow users to interact with computers. Input devices send data to the computer for processing, while output devices present processed data to the user. Together, they form the human-computer interface that makes computers usable.

Input devices include keyboards (for text input), mice and touchpads (for pointing), microphones (for audio), webcams (for video), scanners (for digitizing documents), and touchscreens (for direct interaction). Modern input also includes biometric devices like fingerprint readers and facial recognition cameras.

Output devices display or produce the results of computer processing. Monitors and displays show visual output, while speakers and headphones produce audio. Printers create physical copies of documents, and projectors display content on large screens. Some devices, like touchscreens and VR headsets, serve as both input and output devices, creating immersive interactive experiences.`,
          example: {
            type: 'concept',
            content: `Input/Output Device Categories:

INPUT DEVICES (Send data TO computer)
├── Text: Keyboard, voice recognition
├── Pointing: Mouse, touchpad, stylus
├── Visual: Webcam, scanner, barcode reader
├── Audio: Microphone
└── Biometric: Fingerprint, facial recognition

OUTPUT DEVICES (Receive data FROM computer)
├── Visual: Monitor, projector
├── Audio: Speakers, headphones
├── Physical: Printer, 3D printer
└── Haptic: Vibration motors

DUAL I/O DEVICES
├── Touchscreen displays
├── VR/AR headsets
└── Haptic feedback controllers`
          },
          keyPoints: [
            'Input devices send data to the computer for processing',
            'Output devices present processed data to users',
            'Keyboards and mice are the most common input devices',
            'Monitors and speakers are primary output devices',
            'Modern devices often combine input and output functions'
          ],
          isCompleted: false
        }
      ]
    },
    {
      id: 'ch-2',
      number: 2,
      title: 'Operating Systems',
      description: 'Explore how operating systems manage computer resources and provide user interfaces',
      isLocked: true,
      parts: [
        {
          id: 'ch2-p1',
          title: 'What is OS',
          explanation: `An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. The OS acts as an intermediary between users and the computer hardware, making it possible to run applications without needing to understand the underlying hardware complexities.

The OS performs several critical functions: Process Management handles the creation, scheduling, and termination of processes. Memory Management allocates and deallocates memory space as needed by various programs. File System Management organizes and keeps track of files on storage devices. Device Management coordinates and controls peripheral devices through drivers.

Modern operating systems also provide a user interface (GUI or command line), security features (authentication, access control), and networking capabilities. Popular desktop operating systems include Windows, macOS, and Linux distributions. Mobile operating systems like Android and iOS power smartphones and tablets.`,
          example: {
            type: 'concept',
            content: `Core Functions of an Operating System:

1. PROCESS MANAGEMENT
   - Creates and terminates processes
   - Schedules CPU time for processes
   - Handles process synchronization

2. MEMORY MANAGEMENT
   - Allocates memory to programs
   - Manages virtual memory
   - Handles memory protection

3. FILE SYSTEM MANAGEMENT
   - Organizes files in directories
   - Controls file access permissions
   - Manages storage space

4. DEVICE MANAGEMENT
   - Loads device drivers
   - Coordinates I/O operations
   - Manages hardware interrupts

5. SECURITY & ACCESS CONTROL
   - User authentication
   - Permission management
   - Encryption services`
          },
          keyPoints: [
            'OS manages all hardware and software resources',
            'Process management handles running programs',
            'Memory management allocates RAM efficiently',
            'File systems organize data on storage devices',
            'OS provides security and user interface'
          ],
          isCompleted: false
        },
        {
          id: 'ch2-p2',
          title: 'Windows Basics',
          explanation: `Microsoft Windows is the most widely used desktop operating system, powering over 70% of desktop computers worldwide. First released in 1985, Windows has evolved through many versions, with Windows 11 being the current release. Windows is known for its graphical user interface, broad software compatibility, and enterprise features.

The Windows desktop consists of the taskbar (showing running applications and system tray), the Start menu (for accessing programs and settings), and the desktop area (for shortcuts and files). File Explorer allows users to navigate the file system, organized in drives (C:, D:, etc.) and folders. The Control Panel and Settings app provide access to system configuration.

Windows features include the Windows Registry (a database of system settings), Windows Update for security patches, Microsoft Store for applications, and integration with Microsoft services like OneDrive and Microsoft 365. For power users, Windows offers PowerShell for advanced automation and WSL (Windows Subsystem for Linux) for running Linux tools.`,
          example: {
            type: 'code',
            language: 'powershell',
            content: `# Common Windows PowerShell Commands

# Get system information
Get-ComputerInfo

# List running processes
Get-Process

# Check disk space
Get-PSDrive -PSProvider FileSystem

# View network configuration
Get-NetIPConfiguration

# List installed programs
Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*

# Create a new folder
New-Item -ItemType Directory -Path "C:\\MyFolder"

# Copy files
Copy-Item "source.txt" -Destination "backup.txt"

# View system services
Get-Service | Where-Object {$_.Status -eq "Running"}`
          },
          keyPoints: [
            'Windows is the most popular desktop OS with 70%+ market share',
            'Desktop includes taskbar, Start menu, and file explorer',
            'Windows Registry stores system and application settings',
            'Windows Update keeps the system secure',
            'PowerShell enables advanced automation and scripting'
          ],
          isCompleted: false
        },
        {
          id: 'ch2-p3',
          title: 'Linux Basics',
          explanation: `Linux is a free, open-source operating system kernel created by Linus Torvalds in 1991. Unlike Windows or macOS, Linux comes in many distributions (distros) like Ubuntu, Fedora, Debian, and CentOS. Linux powers most web servers, cloud infrastructure, and supercomputers, and forms the basis of Android.

Linux is built around the philosophy of "everything is a file," including devices and processes. The file system starts at the root directory (/) and branches into directories like /home (user files), /etc (configuration), /var (variable data), and /bin (essential programs). Users interact with Linux through a graphical desktop environment (GNOME, KDE) or the command-line terminal.

Linux uses a permission system based on read (r), write (w), and execute (x) permissions for owner, group, and others. Package managers like apt (Debian/Ubuntu) and yum/dnf (Red Hat/Fedora) handle software installation. Linux is highly customizable, secure, and efficient, making it ideal for servers and development environments.`,
          example: {
            type: 'code',
            language: 'bash',
            content: `# Essential Linux Terminal Commands

# Navigation
pwd                    # Print working directory
ls -la                 # List files with details
cd /path/to/directory  # Change directory

# File Operations
cp source dest         # Copy file
mv source dest         # Move/rename file
rm filename            # Remove file
mkdir dirname          # Create directory

# File Viewing
cat filename           # Display file contents
less filename          # View file with pagination
head -n 10 filename    # First 10 lines
tail -n 10 filename    # Last 10 lines

# Permissions
chmod 755 script.sh    # Change permissions
chown user:group file  # Change ownership

# Package Management (Ubuntu/Debian)
sudo apt update        # Update package list
sudo apt install pkg   # Install package
sudo apt upgrade       # Upgrade all packages

# System Information
uname -a               # System info
df -h                  # Disk usage
free -h                # Memory usage
top                    # Process monitor`
          },
          keyPoints: [
            'Linux is free, open-source, and highly customizable',
            'Many distributions available for different needs',
            'Powers most servers, cloud platforms, and Android',
            'Terminal provides powerful command-line control',
            'Package managers simplify software installation'
          ],
          isCompleted: false
        },
        {
          id: 'ch2-p4',
          title: 'File Management',
          explanation: `File management is a core function of operating systems, allowing users to organize, store, retrieve, and manipulate data efficiently. Understanding file systems and organization is essential for both everyday computer use and professional IT work.

Files are organized in a hierarchical structure of directories (folders). Each file has properties including name, extension (indicating file type), size, creation date, modification date, and permissions. File paths can be absolute (starting from root) or relative (from current location). Common file operations include creating, reading, updating, deleting (CRUD), copying, moving, and searching.

File systems determine how data is stored on disk. NTFS (Windows), ext4 (Linux), and APFS (macOS) are common file systems, each with different features for permissions, journaling, encryption, and maximum file sizes. Proper file management includes regular backups, logical folder organization, meaningful naming conventions, and proper handling of file permissions for security.`,
          example: {
            type: 'code',
            language: 'text',
            content: `File System Organization Best Practices:

DIRECTORY STRUCTURE EXAMPLE:
/
├── Documents/
│   ├── Work/
│   │   ├── Projects/
│   │   ├── Reports/
│   │   └── Meetings/
│   └── Personal/
│       ├── Finance/
│       └── Medical/
├── Downloads/
├── Pictures/
│   ├── 2024/
│   └── Screenshots/
├── Music/
└── Videos/

FILE NAMING CONVENTIONS:
✓ project_report_2024-01-15.pdf
✓ invoice_acme_corp_001.xlsx
✓ meeting_notes_q1_review.docx
✗ final_final_v2_FINAL.doc
✗ document (1) (2).pdf
✗ asdfghjk.txt

FILE EXTENSIONS:
.txt  - Plain text
.pdf  - Portable Document
.docx - Word document
.xlsx - Excel spreadsheet
.jpg  - Image file
.mp4  - Video file
.zip  - Compressed archive`
          },
          keyPoints: [
            'Files are organized in hierarchical directory structures',
            'File paths can be absolute or relative',
            'File systems (NTFS, ext4, APFS) determine storage organization',
            'Regular backups prevent data loss',
            'Consistent naming conventions improve organization'
          ],
          isCompleted: false
        },
        {
          id: 'ch2-p5',
          title: 'Process Management',
          explanation: `Process management is how the operating system handles running programs. A process is an instance of a program in execution, containing the program code, current activity (program counter), stack, data section, and heap. Understanding process management helps in troubleshooting performance issues and optimizing system resources.

The OS uses process scheduling algorithms to determine which process runs when. Common algorithms include First-Come-First-Served (FCFS), Shortest Job First (SJF), Round Robin (time slices), and Priority Scheduling. Modern systems use preemptive multitasking, where the OS can interrupt a running process to run another, creating the illusion of simultaneous execution.

Processes can exist in various states: New (being created), Ready (waiting to run), Running (executing), Waiting (for I/O or event), and Terminated (finished). The OS maintains a Process Control Block (PCB) for each process, containing its state, program counter, CPU registers, memory limits, and I/O status. Tools like Task Manager (Windows) or top/htop (Linux) let users view and manage processes.`,
          example: {
            type: 'code',
            language: 'text',
            content: `Process States and Transitions:

         ┌─────────────────────────────┐
         │                             │
         ▼                             │
    ┌─────────┐    Scheduler      ┌─────────┐
    │   NEW   │ ──────────────▶  │  READY  │
    └─────────┘                   └────┬────┘
                                       │
                    Dispatch           │
              ┌────────────────────────┘
              │
              ▼
         ┌─────────┐
         │ RUNNING │◀─────────┐
         └────┬────┘          │
              │               │
   I/O Wait   │    Interrupt  │
              │               │
              ▼               │
         ┌─────────┐          │
         │ WAITING │──────────┘
         └─────────┘  I/O Complete

TASK MANAGER INFO (Windows):
┌────────────────────────────────────┐
│ Process Name    CPU   Memory  Disk │
├────────────────────────────────────┤
│ Chrome.exe      12%   1.2 GB  5%   │
│ VSCode.exe       8%   800 MB  2%   │
│ Spotify.exe      2%   200 MB  0%   │
│ System           1%   100 MB  1%   │
└────────────────────────────────────┘`
          },
          keyPoints: [
            'A process is a program in execution',
            'OS schedules processes to share CPU time',
            'Processes transition through states: New, Ready, Running, Waiting, Terminated',
            'Preemptive multitasking allows multiple programs to run "simultaneously"',
            'Task Manager and top help monitor and manage processes'
          ],
          isCompleted: false
        }
      ]
    },
    {
      id: 'ch-3',
      number: 3,
      title: 'Internet & Networking',
      description: 'Learn how computers communicate and how the internet works',
      isLocked: true,
      parts: [
        {
          id: 'ch3-p1',
          title: 'Internet Basics',
          explanation: `The Internet is a global network of interconnected computer networks that use the TCP/IP protocol suite to communicate. It originated from ARPANET in 1969, a U.S. Department of Defense project, and has grown to connect billions of devices worldwide. The Internet enables services like the World Wide Web, email, file sharing, and streaming.

The Internet works through a system of networks connected by routers, switches, and cables (including undersea fiber optic cables). When you access a website, your request travels through your local network, to your Internet Service Provider (ISP), through various network nodes, to the destination server, and back. This happens in milliseconds.

Key Internet concepts include clients (devices requesting services), servers (devices providing services), protocols (rules for communication), and IP addresses (unique identifiers for devices). The Internet is decentralized with no single controlling authority, though organizations like ICANN manage domain names and IP address allocation.`,
          example: {
            type: 'concept',
            content: `How Internet Communication Works:

1. You type "www.example.com" in browser

2. DNS Resolution
   Your computer → DNS Server
   "What's the IP for example.com?"
   DNS Server → Your computer
   "It's 93.184.216.34"

3. TCP Connection (3-way handshake)
   Client ──SYN──▶ Server
   Client ◀─SYN+ACK── Server
   Client ──ACK──▶ Server
   Connection established!

4. HTTP Request
   GET /index.html HTTP/1.1
   Host: www.example.com

5. Server Response
   HTTP/1.1 200 OK
   Content-Type: text/html
   <html>...page content...</html>

6. Browser renders the page

Total time: ~100-500 milliseconds`
          },
          keyPoints: [
            'Internet is a global network of interconnected networks',
            'Uses TCP/IP protocol suite for communication',
            'Data travels through routers and switches',
            'ISPs provide connection to the Internet backbone',
            'Internet is decentralized with distributed control'
          ],
          isCompleted: false
        },
        {
          id: 'ch3-p2',
          title: 'Web Browsers',
          explanation: `A web browser is software that retrieves and displays content from the World Wide Web. Browsers interpret HTML, CSS, and JavaScript to render web pages. Major browsers include Google Chrome (65% market share), Safari, Firefox, Microsoft Edge, and Opera. Each has a rendering engine (Blink, WebKit, Gecko) that processes web content.

When you enter a URL, the browser performs several steps: DNS lookup to find the server's IP address, establishing a TCP connection, sending an HTTP/HTTPS request, receiving the response, and rendering the page. Modern browsers handle complex tasks like executing JavaScript, managing cookies and sessions, caching resources, and ensuring secure connections.

Browser features include bookmarks, history, extensions/add-ons, developer tools, private browsing mode, and password management. Developer tools (F12) are invaluable for web developers, allowing inspection of HTML elements, debugging JavaScript, analyzing network requests, and testing responsive designs.`,
          example: {
            type: 'code',
            language: 'html',
            content: `<!-- How Browsers Process a Web Page -->

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Browser parses metadata -->
    <meta charset="UTF-8">
    <title>My Page</title>
    
    <!-- Browser fetches and applies CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Browser builds the DOM tree -->
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    
    <main>
        <h1>Welcome!</h1>
        <p>This is my website.</p>
    </main>
    
    <!-- Browser executes JavaScript -->
    <script src="app.js"></script>
</body>
</html>

<!-- Browser Rendering Process:
1. Parse HTML → Build DOM tree
2. Parse CSS → Build CSSOM tree
3. Combine → Render tree
4. Layout → Calculate positions
5. Paint → Display pixels -->
`
          },
          keyPoints: [
            'Browsers retrieve and render web content',
            'Major browsers: Chrome, Safari, Firefox, Edge',
            'Rendering engines process HTML, CSS, JavaScript',
            'Developer tools help debug and inspect web pages',
            'HTTPS ensures secure encrypted connections'
          ],
          isCompleted: false
        },
        {
          id: 'ch3-p3',
          title: 'IP & DNS',
          explanation: `IP (Internet Protocol) addresses are numerical identifiers assigned to every device on a network. IPv4 addresses (like 192.168.1.1) consist of four octets, allowing about 4.3 billion unique addresses. Due to address exhaustion, IPv6 was developed with 128-bit addresses (like 2001:0db8:85a3:0000:0000:8a2e:0370:7334), providing virtually unlimited addresses.

DNS (Domain Name System) is often called the "phonebook of the Internet." It translates human-readable domain names (www.google.com) into IP addresses (142.250.185.78). When you type a URL, your computer queries DNS servers in a hierarchy: local cache, recursive resolver, root servers, TLD servers (.com, .org), and authoritative name servers.

IP addresses can be public (globally unique, internet-routable) or private (used within local networks: 192.168.x.x, 10.x.x.x, 172.16-31.x.x). NAT (Network Address Translation) allows multiple devices to share one public IP. DNS records include A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail server), and TXT (text data).`,
          example: {
            type: 'code',
            language: 'bash',
            content: `# IP Address Commands

# Windows - View IP configuration
ipconfig /all

# Linux/Mac - View IP configuration
ip addr show        # Linux
ifconfig           # Mac

# Check your public IP
curl ifconfig.me

# DNS Lookup Commands

# Basic DNS lookup
nslookup google.com

# Detailed DNS query
dig google.com

# Sample DNS Response:
# ;; ANSWER SECTION:
# google.com.    300    IN    A    142.250.185.78

# DNS Record Types:
# A     - IPv4 address
# AAAA  - IPv6 address
# CNAME - Alias to another domain
# MX    - Mail server
# TXT   - Text records (SPF, verification)
# NS    - Name server

# Trace DNS resolution path
dig +trace example.com

# Flush DNS cache
# Windows: ipconfig /flushdns
# Mac: sudo dscacheutil -flushcache
# Linux: sudo systemd-resolve --flush-caches`
          },
          keyPoints: [
            'IP addresses uniquely identify devices on networks',
            'IPv4 has 4.3 billion addresses; IPv6 provides virtually unlimited',
            'DNS translates domain names to IP addresses',
            'Private IPs are used in local networks, public IPs on the internet',
            'DNS records map domains to various resources'
          ],
          isCompleted: false
        },
        {
          id: 'ch3-p4',
          title: 'Cyber Security Basics',
          explanation: `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks typically aim to access, change, or destroy sensitive information, extort money from users, or interrupt normal business processes. Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.

Common threats include malware (viruses, worms, ransomware, spyware), phishing (fraudulent emails/websites to steal credentials), man-in-the-middle attacks (intercepting communications), denial-of-service attacks (overwhelming systems), and SQL injection (exploiting database vulnerabilities).

The CIA triad forms the foundation of cybersecurity: Confidentiality (keeping data private through encryption and access controls), Integrity (ensuring data hasn't been tampered with), and Availability (keeping systems operational). Best practices include strong passwords, multi-factor authentication, regular software updates, firewalls, antivirus software, employee training, and regular backups.`,
          example: {
            type: 'code',
            language: 'text',
            content: `Cybersecurity Best Practices:

PASSWORD SECURITY
✗ password123
✗ johndoe1990
✗ qwerty
✓ Tr0ub4dor&3#Horse
✓ Use password manager (Bitwarden, 1Password)
✓ Enable 2FA/MFA everywhere

COMMON ATTACK VECTORS:

1. PHISHING EMAIL SIGNS
   • Urgent language ("Act now!")
   • Generic greetings ("Dear Customer")
   • Suspicious links (hover to check)
   • Spelling/grammar errors
   • Mismatched sender address

2. MALWARE TYPES
   • Virus - Attaches to programs
   • Worm - Self-replicating
   • Trojan - Disguised as legitimate
   • Ransomware - Encrypts files for ransom
   • Spyware - Monitors activity

3. SECURITY LAYERS
   ┌─────────────────────────────┐
   │     Firewall (Network)      │
   │  ┌─────────────────────┐    │
   │  │  Antivirus (System) │    │
   │  │  ┌───────────────┐  │    │
   │  │  │ Encryption    │  │    │
   │  │  │ (Data)        │  │    │
   │  │  └───────────────┘  │    │
   │  └─────────────────────┘    │
   └─────────────────────────────┘`
          },
          keyPoints: [
            'CIA triad: Confidentiality, Integrity, Availability',
            'Common threats: malware, phishing, DDoS attacks',
            'Strong passwords and MFA are essential',
            'Regular updates patch security vulnerabilities',
            'Defense in depth uses multiple security layers'
          ],
          isCompleted: false
        },
        {
          id: 'ch3-p5',
          title: 'Email & Communication',
          explanation: `Email (Electronic Mail) is one of the oldest and most widely used internet communication methods. It uses protocols like SMTP (Simple Mail Transfer Protocol) for sending, and POP3 or IMAP for receiving messages. IMAP synchronizes across devices while POP3 downloads and removes from server. Modern email services like Gmail, Outlook, and Yahoo provide web interfaces and additional features.

Email structure includes headers (From, To, Subject, Date, Message-ID) and body (content, which can be plain text or HTML). Attachments are encoded using MIME (Multipurpose Internet Mail Extensions). Email security is enhanced through SPF (verifying sender servers), DKIM (digital signatures), and DMARC (authentication policy), which help prevent spoofing and spam.

Beyond email, modern communication includes instant messaging (Slack, Teams, Discord), video conferencing (Zoom, Google Meet), VoIP (Voice over IP), and social media platforms. Each has different use cases: email for formal asynchronous communication, IM for quick team chat, video for meetings and collaboration.`,
          example: {
            type: 'code',
            language: 'text',
            content: `Email Communication Flow:

SENDING EMAIL (SMTP):
┌─────────────┐      ┌─────────────┐
│   Sender    │──────│ SMTP Server │
│  (Client)   │ :587 │  (Outgoing) │
└─────────────┘      └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │    Internet Routing     │
              │   (MX Record Lookup)    │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │   Recipient's Server    │
              │   (Incoming Mail)       │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │      Recipient          │
              │   (IMAP/POP3 Client)    │
              └─────────────────────────┘

EMAIL HEADER EXAMPLE:
From: john@example.com
To: jane@company.com
Subject: Meeting Tomorrow
Date: Mon, 15 Jan 2024 10:30:00 -0500
Message-ID: <unique-id@example.com>
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

PROFESSIONAL EMAIL STRUCTURE:
1. Clear subject line
2. Professional greeting
3. Purpose in first paragraph
4. Details in body
5. Clear call to action
6. Professional signature`
          },
          keyPoints: [
            'SMTP sends email, IMAP/POP3 receive email',
            'IMAP syncs across devices, POP3 downloads locally',
            'SPF, DKIM, DMARC help authenticate emails',
            'Modern communication includes IM, video, and VoIP',
            'Professional email etiquette matters in business'
          ],
          isCompleted: false
        }
      ]
    },
    {
      id: 'ch-4',
      number: 4,
      title: 'Programming Basics',
      description: 'Introduction to programming concepts and fundamental coding skills',
      isLocked: true,
      parts: [
        {
          id: 'ch4-p1',
          title: 'What is Programming',
          explanation: `Programming is the process of creating a set of instructions that tell a computer how to perform a task. These instructions, written in programming languages, are translated into machine code that computers can execute. Programming is the foundation of all software, from simple scripts to complex applications.

Programming languages range from low-level (close to machine code, like Assembly) to high-level (more human-readable, like Python or JavaScript). Each language has syntax (rules for writing code) and semantics (meaning of the code). Popular languages include Python (versatile, beginner-friendly), JavaScript (web development), Java (enterprise applications), C++ (system programming), and many more.

The programming process typically involves: understanding the problem, designing a solution (algorithm), writing code, testing and debugging, and maintaining the software. Good programmers develop computational thinking skills: breaking problems into smaller parts, recognizing patterns, abstracting details, and designing algorithms.`,
          example: {
            type: 'code',
            language: 'python',
            content: `# Your First Program in Multiple Languages

# Python - Simple and readable
print("Hello, World!")

# JavaScript - Web development
console.log("Hello, World!");

# Java - Enterprise applications
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

# C++ - System programming
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

# The Programming Process:
# 1. UNDERSTAND - What problem are we solving?
# 2. PLAN - How will we solve it? (algorithm)
# 3. CODE - Write the solution
# 4. TEST - Does it work correctly?
# 5. DEBUG - Fix any errors
# 6. REFINE - Improve and optimize`
          },
          keyPoints: [
            'Programming creates instructions for computers',
            'Languages range from low-level to high-level',
            'Python is excellent for beginners',
            'The process: plan, code, test, debug, refine',
            'Computational thinking is a key skill'
          ],
          isCompleted: false
        },
        {
          id: 'ch4-p2',
          title: 'Variables & Data Types',
          explanation: `Variables are containers that store data values in a program. Think of them as labeled boxes where you can put information to use later. Each variable has a name (identifier) and holds a value of a specific data type. Variables allow programs to remember information and manipulate data dynamically.

Data types define what kind of value a variable can hold. Common types include: Integers (whole numbers like 42), Floats/Doubles (decimal numbers like 3.14), Strings (text like "Hello"), Booleans (true/false), Arrays/Lists (collections of values), and Objects (complex data structures). Some languages are statically typed (types declared explicitly) while others are dynamically typed (types inferred at runtime).

Good variable naming practices include using descriptive names (totalPrice vs tp), following conventions (camelCase, snake_case), avoiding reserved words, and making names meaningful. Variables have scope (where they can be accessed) and lifetime (how long they exist).`,
          example: {
            type: 'code',
            language: 'javascript',
            content: `// Variables and Data Types in JavaScript

// DECLARING VARIABLES
let age = 25;              // Can be changed
const PI = 3.14159;        // Cannot be changed
var oldStyle = "avoid";    // Older syntax

// DATA TYPES

// Numbers (integers and decimals)
let count = 42;
let price = 19.99;
let negative = -10;

// Strings (text)
let name = "Alice";
let greeting = 'Hello!';
let template = \`Hi, \${name}\`; // Template literal

// Booleans (true/false)
let isLoggedIn = true;
let hasPermission = false;

// Arrays (lists of values)
let colors = ["red", "green", "blue"];
let mixed = [1, "two", true, null];

// Objects (key-value pairs)
let person = {
    name: "Bob",
    age: 30,
    email: "bob@example.com"
};

// Special values
let nothing = null;        // Intentionally empty
let notDefined;            // undefined
let invalid = NaN;         // Not a Number

// Type checking
console.log(typeof age);      // "number"
console.log(typeof name);     // "string"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof colors);   // "object" (arrays are objects)`
          },
          keyPoints: [
            'Variables store data values with names',
            'Data types: numbers, strings, booleans, arrays, objects',
            'Use const for values that do not change',
            'Use let for values that may change',
            'Descriptive variable names improve code readability'
          ],
          isCompleted: false
        },
        {
          id: 'ch4-p3',
          title: 'Conditions',
          explanation: `Conditional statements allow programs to make decisions based on whether certain conditions are true or false. This is how programs react to different inputs and situations, creating dynamic behavior. Without conditionals, programs would just execute the same instructions every time.

The basic conditional structure is if-else: if a condition is true, execute one block of code; otherwise, execute a different block. Multiple conditions can be chained with else-if. Comparison operators (==, !=, <, >, <=, >=) compare values, while logical operators (&&, ||, !) combine conditions.

Switch statements provide an alternative for checking multiple specific values. Ternary operators offer a shorthand for simple if-else statements. Understanding truthy and falsy values is important: in many languages, 0, empty strings, null, and undefined are "falsy" (treated as false in conditions).`,
          example: {
            type: 'code',
            language: 'javascript',
            content: `// Conditional Statements in JavaScript

// IF-ELSE STATEMENT
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// IF-ELSE IF-ELSE (multiple conditions)
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// COMPARISON OPERATORS
// ==  Equal to (loose)
// === Equal to (strict - checks type too)
// !=  Not equal
// <   Less than
// >   Greater than
// <=  Less than or equal
// >=  Greater than or equal

// LOGICAL OPERATORS
let isLoggedIn = true;
let isAdmin = false;

// AND (&&) - both must be true
if (isLoggedIn && isAdmin) {
    console.log("Welcome, admin!");
}

// OR (||) - at least one must be true
if (isLoggedIn || isAdmin) {
    console.log("Access granted");
}

// NOT (!) - reverses the condition
if (!isAdmin) {
    console.log("You are not an admin");
}

// TERNARY OPERATOR (shorthand)
let status = age >= 18 ? "adult" : "minor";

// SWITCH STATEMENT
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}`
          },
          keyPoints: [
            'Conditions let programs make decisions',
            'if-else executes code based on true/false',
            'Comparison operators compare values',
            'Logical operators (&&, ||, !) combine conditions',
            'Switch statements check multiple specific values'
          ],
          isCompleted: false
        },
        {
          id: 'ch4-p4',
          title: 'Loops',
          explanation: `Loops are programming constructs that repeat a block of code multiple times. They're essential for automating repetitive tasks, processing collections of data, and creating dynamic behavior. Without loops, you'd need to write the same code hundreds or thousands of times.

The main types of loops are: for loops (repeat a specific number of times), while loops (repeat while a condition is true), and do-while loops (execute at least once, then check condition). For-of and for-in loops iterate over arrays and objects. Each type has its ideal use case.

Understanding loop control is crucial: the break statement exits the loop entirely, while continue skips to the next iteration. Nested loops (loops inside loops) handle multi-dimensional data. Infinite loops (loops that never end) should be avoided as they crash programs. Always ensure your loop has a clear exit condition.`,
          example: {
            type: 'code',
            language: 'javascript',
            content: `// Loops in JavaScript

// FOR LOOP - when you know how many times
for (let i = 0; i < 5; i++) {
    console.log(\`Iteration \${i}\`);
}
// Output: 0, 1, 2, 3, 4

// WHILE LOOP - repeat while condition is true
let count = 0;
while (count < 5) {
    console.log(\`Count: \${count}\`);
    count++;
}

// DO-WHILE - always runs at least once
let num = 0;
do {
    console.log(\`Number: \${num}\`);
    num++;
} while (num < 3);

// FOR-OF - iterate over array values
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// FOR-IN - iterate over object keys
let person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// ARRAY METHODS (modern approach)
let numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach(n => console.log(n * 2));

// map - transform each element
let doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements matching condition
let evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// LOOP CONTROL
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip 3
    if (i === 7) break;     // Stop at 7
    console.log(i);
}
// Output: 0, 1, 2, 4, 5, 6

// NESTED LOOPS (multiplication table)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}`
          },
          keyPoints: [
            'for loops repeat a specific number of times',
            'while loops repeat while a condition is true',
            'for-of iterates over array values',
            'break exits the loop, continue skips to next iteration',
            'Array methods (map, filter, forEach) are modern alternatives'
          ],
          isCompleted: false
        },
        {
          id: 'ch4-p5',
          title: 'Functions',
          explanation: `Functions are reusable blocks of code that perform specific tasks. They're one of the most important concepts in programming, allowing you to organize code, avoid repetition, and create modular programs. Functions take inputs (parameters), process them, and often return an output.

Functions follow the DRY principle (Don't Repeat Yourself). Instead of writing the same code multiple times, you write it once in a function and call it whenever needed. This makes code easier to maintain: fix a bug in one place, and it's fixed everywhere.

Functions can be declared (function declarations), assigned to variables (function expressions), or written as arrow functions (concise syntax). They can accept multiple parameters, have default values, and return values of any type. Understanding scope (what variables a function can access) and closures (functions that remember their environment) is key to mastering functions.`,
          example: {
            type: 'code',
            language: 'javascript',
            content: `// Functions in JavaScript

// FUNCTION DECLARATION
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// FUNCTION EXPRESSION
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20

// ARROW FUNCTION (modern syntax)
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Multiple statements in arrow function
const calculateTax = (price, rate) => {
    const tax = price * rate;
    return price + tax;
};

// DEFAULT PARAMETERS
function greetUser(name = "Guest") {
    return \`Welcome, \${name}!\`;
}
console.log(greetUser());        // "Welcome, Guest!"
console.log(greetUser("Bob"));   // "Welcome, Bob!"

// MULTIPLE PARAMETERS
function createUser(name, age, email) {
    return {
        name: name,
        age: age,
        email: email,
        createdAt: new Date()
    };
}

// REST PARAMETERS (variable arguments)
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// PRACTICAL EXAMPLE
function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
        errors.push("Must be at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Must contain uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Must contain a number");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

const result = validatePassword("hello");
console.log(result);
// { isValid: false, errors: [...] }`
          },
          keyPoints: [
            'Functions are reusable blocks of code',
            'They take parameters and can return values',
            'Arrow functions provide concise syntax',
            'Default parameters handle missing arguments',
            'Functions help organize code and avoid repetition'
          ],
          isCompleted: false
        }
      ]
    },
    {
      id: 'ch-5',
      number: 5,
      title: 'Advanced IT Skills',
      description: 'Build practical skills for modern IT careers and technologies',
      isLocked: true,
      parts: [
        {
          id: 'ch5-p1',
          title: 'Web Development Intro',
          explanation: `Web development is the work involved in building websites and web applications. It's divided into frontend (client-side) development, which creates what users see and interact with, and backend (server-side) development, which handles data processing, storage, and business logic. Full-stack developers work on both.

Frontend development uses HTML (structure), CSS (styling), and JavaScript (interactivity). Modern frontend often involves frameworks like React, Vue, or Angular. These tools help build complex, interactive user interfaces efficiently. Responsive design ensures websites work on all device sizes.

Backend development uses languages like Python, JavaScript (Node.js), Java, PHP, or Ruby to create server logic, handle databases, process forms, authenticate users, and serve API endpoints. The backend connects to databases (MySQL, PostgreSQL, MongoDB) to store and retrieve data. Understanding both frontend and backend creates valuable full-stack skills.`,
          example: {
            type: 'code',
            language: 'html',
            content: `<!-- Simple Web Page Structure -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
    <style>
        /* CSS - Styling */
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .button {
            background: #2ecc71;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- HTML - Structure -->
    <header class="header">
        <h1>Welcome to My Website</h1>
    </header>
    
    <main>
        <p>This is a paragraph of text.</p>
        <button class="button" id="clickMe">Click Me</button>
        <p id="message"></p>
    </main>

    <script>
        // JavaScript - Interactivity
        document.getElementById('clickMe').addEventListener('click', function() {
            document.getElementById('message').textContent = 'Button clicked!';
        });
    </script>
</body>
</html>

<!-- WEB DEVELOPMENT STACK:
Frontend: HTML + CSS + JavaScript
Backend: Node.js / Python / PHP
Database: MySQL / MongoDB
Hosting: Vercel / AWS / Netlify -->`
          },
          keyPoints: [
            'Frontend: HTML (structure), CSS (style), JavaScript (interactivity)',
            'Backend: Server logic, databases, APIs',
            'Full-stack developers do both frontend and backend',
            'Frameworks like React and Node.js speed development',
            'Responsive design works on all screen sizes'
          ],
          isCompleted: false
        },
        {
          id: 'ch5-p2',
          title: 'Databases',
          explanation: `Databases are organized collections of data stored and accessed electronically. They're essential for any application that needs to persist information beyond a single session. Understanding databases is crucial for building real-world applications that store user data, products, transactions, and more.

Relational databases (SQL) like MySQL, PostgreSQL, and SQLite organize data in tables with rows and columns, connected by relationships. They use SQL (Structured Query Language) for queries. ACID properties (Atomicity, Consistency, Isolation, Durability) ensure reliable transactions. Relational databases excel at structured data with clear relationships.

NoSQL databases like MongoDB, Redis, and Cassandra offer flexible schemas and horizontal scalability. They're categorized as document stores, key-value stores, column-family stores, and graph databases. NoSQL is ideal for unstructured data, rapid development, and massive scale. Many modern applications use both types for different purposes.`,
          example: {
            type: 'code',
            language: 'sql',
            content: `-- SQL Database Examples

-- CREATE TABLE
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(200),
    content TEXT,
    published BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INSERT DATA
INSERT INTO users (name, email) VALUES
    ('Alice', 'alice@email.com'),
    ('Bob', 'bob@email.com');

INSERT INTO posts (user_id, title, content, published) VALUES
    (1, 'My First Post', 'Hello World!', TRUE),
    (1, 'Draft Post', 'Work in progress...', FALSE);

-- SELECT QUERIES
-- Get all users
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM posts WHERE published = TRUE;

-- JOIN tables
SELECT users.name, posts.title
FROM users
JOIN posts ON users.id = posts.user_id;

-- UPDATE data
UPDATE users SET name = 'Alice Smith' WHERE id = 1;

-- DELETE data
DELETE FROM posts WHERE published = FALSE;

-- AGGREGATE functions
SELECT user_id, COUNT(*) as post_count
FROM posts
GROUP BY user_id;

/* NoSQL (MongoDB) Example:
{
    "_id": ObjectId("..."),
    "name": "Alice",
    "email": "alice@email.com",
    "posts": [
        { "title": "First Post", "content": "..." }
    ]
}
*/`
          },
          keyPoints: [
            'Databases store and organize data persistently',
            'SQL databases use tables with relationships',
            'CRUD: Create, Read, Update, Delete operations',
            'NoSQL offers flexible schemas for unstructured data',
            'JOIN connects data across multiple tables'
          ],
          isCompleted: false
        },
        {
          id: 'ch5-p3',
          title: 'APIs',
          explanation: `An API (Application Programming Interface) is a set of protocols and tools that allows different software applications to communicate with each other. APIs define how software components should interact, enabling developers to use functionality from other services without understanding their internal workings.

REST (Representational State Transfer) APIs are the most common type for web services. They use HTTP methods: GET (retrieve data), POST (create data), PUT/PATCH (update data), and DELETE (remove data). Data is typically exchanged in JSON format. REST APIs are stateless, meaning each request contains all information needed to process it.

APIs enable powerful integrations: fetching weather data, processing payments (Stripe), sending emails (SendGrid), authenticating users (OAuth), accessing social media data, and countless other services. Understanding how to consume APIs (as a client) and create APIs (as a developer) is essential for modern development.`,
          example: {
            type: 'code',
            language: 'javascript',
            content: `// Working with APIs in JavaScript

// FETCH API - Making HTTP Requests

// GET Request - Retrieve data
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    const users = await response.json();
    return users;
}

// POST Request - Create data
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_TOKEN'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}

// Example usage
const newUser = await createUser({
    name: 'Alice',
    email: 'alice@example.com'
});

// REST API ENDPOINTS PATTERN:
// GET    /users       - List all users
// GET    /users/123   - Get user with ID 123
// POST   /users       - Create new user
// PUT    /users/123   - Update user 123
// DELETE /users/123   - Delete user 123

// API RESPONSE EXAMPLE:
{
    "status": "success",
    "data": {
        "id": 123,
        "name": "Alice",
        "email": "alice@example.com"
    },
    "message": "User created successfully"
}

// ERROR HANDLING
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}

// HTTP Status Codes:
// 200 - OK
// 201 - Created
// 400 - Bad Request
// 401 - Unauthorized
// 404 - Not Found
// 500 - Server Error`
          },
          keyPoints: [
            'APIs allow different software to communicate',
            'REST uses HTTP methods: GET, POST, PUT, DELETE',
            'JSON is the common data format for APIs',
            'APIs enable integration with external services',
            'Status codes indicate request success or failure'
          ],
          isCompleted: false
        },
        {
          id: 'ch5-p4',
          title: 'Version Control (Git)',
          explanation: `Version control is a system that records changes to files over time, allowing you to recall specific versions later. Git is the most popular version control system, created by Linus Torvalds (creator of Linux). It's essential for collaborative development and tracking code history.

Git tracks changes in a repository (repo). Key concepts include: commits (snapshots of your code), branches (parallel versions of your code), merging (combining branches), and remotes (hosted copies like GitHub). The basic workflow is: make changes, stage them (git add), commit them (git commit), and push to a remote (git push).

GitHub, GitLab, and Bitbucket host Git repositories online, adding collaboration features like pull requests (proposing changes), issues (tracking bugs/features), code review, and CI/CD pipelines. Git proficiency is mandatory for professional developers and is valuable even for solo projects.`,
          example: {
            type: 'code',
            language: 'bash',
            content: `# Git Essential Commands

# SETUP
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# STARTING A PROJECT
git init                    # Initialize new repo
git clone <url>            # Clone existing repo

# BASIC WORKFLOW
git status                  # Check current status
git add filename           # Stage specific file
git add .                  # Stage all changes
git commit -m "Message"    # Commit with message
git push                   # Push to remote

# VIEWING HISTORY
git log                    # View commit history
git log --oneline          # Compact view
git diff                   # Show unstaged changes

# BRANCHING
git branch                 # List branches
git branch feature-x       # Create new branch
git checkout feature-x     # Switch to branch
git checkout -b feature-y  # Create and switch
git merge feature-x        # Merge branch

# REMOTE OPERATIONS
git remote -v              # List remotes
git pull                   # Fetch and merge
git push origin main       # Push to main branch

# UNDOING CHANGES
git checkout -- filename   # Discard changes
git reset HEAD filename    # Unstage file
git revert <commit>        # Undo a commit

# TYPICAL WORKFLOW EXAMPLE:
# 1. Create branch for new feature
git checkout -b add-login-form

# 2. Make changes and commit
git add src/components/LoginForm.jsx
git commit -m "Add login form component"

# 3. Push branch to remote
git push origin add-login-form

# 4. Create Pull Request on GitHub
# 5. Review and merge
# 6. Update local main
git checkout main
git pull origin main

# .gitignore FILE (files to ignore):
# node_modules/
# .env
# *.log
# .DS_Store`
          },
          keyPoints: [
            'Git tracks changes to code over time',
            'Commits are snapshots, branches are parallel versions',
            'GitHub hosts repos and enables collaboration',
            'Pull requests allow code review before merging',
            'Git proficiency is essential for developers'
          ],
          isCompleted: false
        },
        {
          id: 'ch5-p5',
          title: 'Career Paths',
          explanation: `Information Technology offers diverse career paths, from hands-on technical roles to management positions. The field continues to grow rapidly, with strong demand and competitive salaries. Understanding the various paths helps you focus your learning and career development.

Technical roles include: Software Developer/Engineer (building applications), Web Developer (frontend, backend, or full-stack), Data Scientist/Analyst (working with data), DevOps Engineer (infrastructure and deployment), Cybersecurity Analyst (protecting systems), Network Administrator (managing networks), Database Administrator (managing data systems), Cloud Architect (designing cloud solutions), and QA Engineer (testing software).

Each path requires specific skills. Software development needs programming proficiency, data science needs statistics and Python, cybersecurity needs security protocols and ethical hacking knowledge. Continuous learning is essential as technology evolves rapidly. Certifications (AWS, Google Cloud, CompTIA, Cisco) can validate skills and boost employability.`,
          example: {
            type: 'concept',
            content: `IT Career Paths Overview:

DEVELOPMENT
├── Frontend Developer
│   Skills: HTML, CSS, JavaScript, React/Vue
│   Salary: $60K - $130K
│
├── Backend Developer
│   Skills: Python/Node.js/Java, Databases, APIs
│   Salary: $70K - $150K
│
├── Full-Stack Developer
│   Skills: Frontend + Backend + DevOps basics
│   Salary: $80K - $160K
│
└── Mobile Developer
    Skills: Swift/Kotlin, React Native/Flutter
    Salary: $70K - $150K

DATA & AI
├── Data Analyst
│   Skills: SQL, Excel, Visualization tools
│   Salary: $55K - $100K
│
├── Data Scientist
│   Skills: Python, ML, Statistics, Big Data
│   Salary: $90K - $180K
│
└── ML Engineer
    Skills: Deep Learning, MLOps, Python
    Salary: $100K - $200K

INFRASTRUCTURE
├── DevOps Engineer
│   Skills: Linux, Docker, Kubernetes, CI/CD
│   Salary: $80K - $160K
│
├── Cloud Architect
│   Skills: AWS/Azure/GCP, Architecture design
│   Salary: $120K - $200K
│
└── Network Administrator
    Skills: Cisco, Network protocols, Security
    Salary: $50K - $100K

SECURITY
└── Cybersecurity Analyst
    Skills: Security tools, Ethical hacking, Compliance
    Salary: $70K - $140K

LEARNING PATH:
1. Build foundational skills
2. Choose a specialization
3. Build projects for portfolio
4. Get certified (optional but helpful)
5. Gain experience (internships, freelance)
6. Network and apply for jobs
7. Keep learning continuously`
          },
          keyPoints: [
            'IT offers diverse career paths with strong demand',
            'Choose based on interests: code, data, security, infrastructure',
            'Continuous learning is essential in tech',
            'Build a portfolio of projects to showcase skills',
            'Certifications can boost credibility and opportunities'
          ],
          isCompleted: false
        }
      ]
    }
  ]
}

// Helper function to calculate chapter progress
export function calculateChapterProgress(chapter: Chapter): number {
  const completedParts = chapter.parts.filter(p => p.isCompleted).length
  return Math.round((completedParts / chapter.parts.length) * 100)
}

// Helper function to calculate overall course progress
export function calculateCourseProgress(course: Course): number {
  const totalParts = course.chapters.reduce((acc, ch) => acc + ch.parts.length, 0)
  const completedParts = course.chapters.reduce(
    (acc, ch) => acc + ch.parts.filter(p => p.isCompleted).length,
    0
  )
  return Math.round((completedParts / totalParts) * 100)
}
