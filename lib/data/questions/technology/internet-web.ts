// Internet & Web Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const internetWebQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "internet-web-easy-1",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correctAnswer: 1,
    explanation: "Tim Berners-Lee invented the World Wide Web in 1989."
  },
  {
    id: "internet-web-easy-2",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'HTTP' stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Program", "Home Tool Transfer Protocol", "Hyper Transfer Text Protocol"],
    correctAnswer: 0,
    explanation: "HTTP is the protocol used for transferring web pages."
  },
  {
    id: "internet-web-easy-3",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'HTML' stand for?",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    correctAnswer: 0,
    explanation: "HTML is the standard markup language for web pages."
  },
  {
    id: "internet-web-easy-4",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'URL' stand for?",
    options: ["Uniform Resource Locator", "Universal Reference Language", "User Resource Link", "Unlimited Resource Library"],
    correctAnswer: 0,
    explanation: "URL is the web address used to locate resources on the internet."
  },
  {
    id: "internet-web-easy-5",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'WWW' stand for?",
    options: ["World Wide Web", "Web World Wide", "Worldwide Web Network", "Web & Win Worldwide"],
    correctAnswer: 0,
    explanation: "WWW stands for World Wide Web."
  },
  {
    id: "internet-web-easy-6",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    correctAnswer: 2,
    explanation: "Netscape developed JavaScript in 1995."
  },
  {
    id: "internet-web-easy-7",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a web browser?",
    options: ["A search engine", "Software for accessing the web", "A programming language", "A type of server"],
    correctAnswer: 1,
    explanation: "A web browser is software that allows you to access and view web pages."
  },
  {
    id: "internet-web-easy-8",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "The first website ever created is still online today.",
    correctAnswer: 1,
    explanation: "True. The first website, info.cern.ch, is still accessible."
  },
  {
    id: "internet-web-easy-9",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "'https' is a secure version of 'http'.",
    correctAnswer: 1,
    explanation: "True. HTTPS uses encryption for secure data transmission."
  },
  {
    id: "internet-web-easy-10",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Google is the largest search engine by market share.",
    correctAnswer: 1,
    explanation: "True. Google dominates search engine market share globally."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "internet-web-medium-1",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was Google founded?",
    options: ["1996", "1998", "2000", "2002"],
    correctAnswer: 1,
    explanation: "Google was founded by Larry Page and Sergey Brin in 1998."
  },
  {
    id: "internet-web-medium-2",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was Facebook founded?",
    options: ["2002", "2004", "2006", "2008"],
    correctAnswer: 1,
    explanation: "Facebook was founded by Mark Zuckerberg in 2004."
  },
  {
    id: "internet-web-medium-3",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does 'DNS' stand for?",
    options: ["Data Name System", "Domain Name System", "Direct Network Service", "Digital Number System"],
    correctAnswer: 1,
    explanation: "DNS converts domain names to IP addresses."
  },
  {
    id: "internet-web-medium-4",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a 'cookie' in web context?",
    options: ["Food in digital form", "A small file storing user data", "A type of malware", "A browser feature"],
    correctAnswer: 1,
    explanation: "Cookies store user information and preferences from websites."
  },
  {
    id: "internet-web-medium-5",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does 'SEO' stand for?",
    options: ["Search Engine Optimization", "System Enterprise Order", "Secure Email Operation", "Server Equipment Organization"],
    correctAnswer: 0,
    explanation: "SEO improves website visibility in search engine results."
  },
  {
    id: "internet-web-medium-6",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which web browser was released first?",
    options: ["Internet Explorer", "Netscape Navigator", "Firefox", "Chrome"],
    correctAnswer: 1,
    explanation: "Netscape Navigator was the first popular web browser."
  },
  {
    id: "internet-web-medium-7",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does 'FTP' stand for?",
    options: ["File Transfer Protocol", "Fast Transfer Program", "File Technology Protocol", "Fast Technology Process"],
    correctAnswer: 0,
    explanation: "FTP is used for transferring files over the internet."
  },
  {
    id: "internet-web-medium-8",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The '@' symbol in email addresses was chosen by Ray Tomlinson.",
    correctAnswer: 1,
    explanation: "True. Tomlinson chose '@' for the first email system in 1971."
  },
  {
    id: "internet-web-medium-9",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "YouTube was founded in 2005.",
    correctAnswer: 1,
    explanation: "True. YouTube was founded in February 2005."
  },
  {
    id: "internet-web-medium-10",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Twitter was founded before Facebook.",
    correctAnswer: 0,
    explanation: "False. Facebook (2004) came before Twitter (2006)."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "internet-web-hard-1",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year was the first website published?",
    options: ["1989", "1990", "1991", "1992"],
    correctAnswer: 2,
    explanation: "The first website was published in August 1991 by Tim Berners-Lee."
  },
  {
    id: "internet-web-hard-2",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the original domain of the first website?",
    options: ["www.first.com", "info.cern.ch", "web.cern.ch", "www.cern.org"],
    correctAnswer: 1,
    explanation: "The first website is at info.cern.ch and is still accessible."
  },
  {
    id: "internet-web-hard-3",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is an IP address used for?",
    options: ["Identifying Internet Programs", "Identifying devices on a network", "Internet Protocol Adapter", "Internal Page Address"],
    correctAnswer: 1,
    explanation: "An IP address uniquely identifies devices on the internet."
  },
  {
    id: "internet-web-hard-4",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the most common API format used on the web?",
    options: ["XML", "JSON", "YAML", "HTML"],
    correctAnswer: 1,
    explanation: "JSON is now the most widely used API format."
  },
  {
    id: "internet-web-hard-5",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What does 'REST' stand for in web services?",
    options: ["Responsive Enterprise System Technology", "Representational State Transfer", "Remote Execution Standard Technology", "Resource E Service Transfer"],
    correctAnswer: 1,
    explanation: "REST is an architectural style for web services."
  },
  {
    id: "internet-web-hard-6",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What does 'W3C' stand for?",
    options: ["World Web 3 Consortium", "World Wide Web Consortium", "Web 3 Centralization Committee", "Worldwide Windows Console"],
    correctAnswer: 1,
    explanation: "W3C creates web standards and protocols."
  },
  {
    id: "internet-web-hard-7",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the first webcam used for?",
    options: ["Security monitoring", "Video conferencing", "Monitoring a coffee pot at MIT", "Streaming video"],
    correctAnswer: 2,
    explanation: "The first webcam was set up at MIT to monitor a coffee pot!"
  },
  {
    id: "internet-web-hard-8",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The internet and the World Wide Web are the same thing.",
    correctAnswer: 0,
    explanation: "False. The internet is the infrastructure; the web is an application on it."
  },
  {
    id: "internet-web-hard-9",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "IPv6 has more addresses available than IPv4.",
    correctAnswer: 1,
    explanation: "True. IPv6 provides vastly more addresses than IPv4."
  },
  {
    id: "internet-web-hard-10",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "ARPANET was the precursor to the internet.",
    correctAnswer: 1,
    explanation: "True. ARPANET was developed by DARPA and led to the modern internet."
  }
] satisfies QuizQuestion[];
