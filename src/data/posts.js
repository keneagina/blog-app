// Helper function to shuffle an array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Define only 5 categories to use
const categories = [
  'Employee Advocacy',
  'Marketing',
  'Social Media',
  'Analytics',
  'Leadership'
];

// Helper function to get a random category
function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

// Define all posts without trending flag initially and with random categories
const allPosts = [
  {
    id: 1,
    title: 'Inside Barclays\' Viral Creator Club',
    slug: 'barclays-viral-creator-club',
    category: getRandomCategory(),
    date: '2023-05-15',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Learn how Barclays\' Creator Club is transforming employer branding by empowering employees to share their stories.',
    content: 'Barclays\' Creator Club has become a powerful tool for employer branding by empowering employees to share authentic stories about their work experience. The initiative has transformed how the company engages with potential talent and customers alike, creating a more human connection to the brand. By giving employees a platform and the support to create content, Barclays has effectively amplified its reach while showcasing its culture through the voices of those who know it best.'
  },
  {
    id: 2,
    title: 'Employee Advocacy for Logistics and Shipping',
    slug: 'employee-advocacy-logistics-shipping',
    category: getRandomCategory(),
    date: '2023-05-10',
    image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a22?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Boost logistics marketing with employee advocacy. Learn how shipping companies can build trust.',
    content: 'Employee advocacy is transforming how logistics and shipping companies market themselves. By leveraging the authentic voices of employees, companies in this sector can build greater trust with customers and partners. The logistics industry, often perceived as impersonal, benefits tremendously when real people share insights about their work, the technology they use, and the solutions they provide. This humanizes the brand and creates more meaningful connections with potential clients and talent.'
  },
  {
    id: 3,
    title: '12 Success Stories That Prove Personal Branding on LinkedIn Works',
    slug: 'personal-branding-linkedin-success-stories',
    category: getRandomCategory(),
    date: '2023-04-28',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1000&q=80',
    excerpt: '12 real examples of personal branding on LinkedIn that led to career opportunities.',
    content: 'Personal branding on LinkedIn isn\'t just a buzzword—it\'s a career-changing strategy when done right. These 12 success stories showcase professionals who transformed their careers through consistent, authentic content and engagement on the platform. From landing dream jobs to securing speaking opportunities and book deals, these examples prove that investing time in your LinkedIn presence can yield remarkable results. Each story highlights different approaches, from thought leadership content to industry analysis and personal journey sharing.'
  },
  {
    id: 4,
    title: '18 Thought Leadership Statistics You Should Know',
    slug: 'thought-leadership-statistics',
    category: getRandomCategory(),
    date: '2023-04-20',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Discover the latest thought leadership statistics to boost brand authority and drive engagement.',
    content: 'Thought leadership has become an essential component of modern marketing strategies. These 18 statistics reveal just how powerful it can be for building brand authority and influencing business decisions. From B2B buying decisions to content engagement rates, the numbers show that high-quality thought leadership content directly impacts business growth. Companies that invest in establishing their executives and employees as industry experts see measurable improvements in brand perception, lead generation, and customer trust.'
  },
  {
    id: 5,
    title: 'How To Leverage Employee Stories For Talent Acquisition',
    slug: 'employee-stories-talent-acquisition',
    category: getRandomCategory(),
    date: '2023-04-15',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Everything you need to know about leveraging employee stories for talent acquisition and retention.',
    content: 'Employee stories are your most powerful recruitment tool in today\'s competitive talent market. When potential candidates see authentic experiences shared by your current team members, they gain invaluable insight into your company culture and work environment. This guide explores how to identify compelling employee narratives, create engaging content around their experiences, and distribute these stories effectively across multiple channels. By showcasing real employee journeys, you not only attract better-fit candidates but also reinforce your employer brand and improve retention rates among existing staff.'
  },
  {
    id: 6,
    title: 'Employee Advocacy Reports & Analytics',
    slug: 'employee-advocacy-reports-analytics',
    category: getRandomCategory(),
    date: '2023-04-05',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Learn how to measure the success of your employee advocacy program with comprehensive analytics.',
    content: 'Measuring the impact of your employee advocacy program requires a strategic approach to data and analytics. This guide covers the essential metrics you should track, from engagement rates and reach to content performance and conversion metrics. By establishing clear KPIs and regularly analyzing program performance, you can identify which content resonates most with your audience, which employees drive the most engagement, and how to optimize your strategy for better results. Effective reporting not only helps refine your approach but also demonstrates concrete ROI to stakeholders.'
  },
  {
    id: 7,
    title: 'Employee Advocacy Benchmark Report 2025 Key Findings',
    slug: 'employee-advocacy-benchmark-report-2025',
    category: getRandomCategory(),
    date: '2023-06-10',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Discover the latest trends and insights from our comprehensive Employee Advocacy Benchmark Report for 2025.',
    content: 'Our Employee Advocacy Benchmark Report for 2025 reveals groundbreaking insights into how top-performing organizations are leveraging their workforce as brand ambassadors. The data shows a 42% increase in engagement when employees share company content compared to corporate channels alone. Organizations with structured advocacy programs experience 3x higher conversion rates and significantly improved brand perception. This report analyzes data from over 250 companies across industries, providing actionable insights on program adoption, content performance, and measurable business impact. Use these benchmarks to evaluate your own advocacy program and identify opportunities for growth.'
  },
  {
    id: 8,
    title: 'How To Migrate Your Employee Advocacy Program to DSMN8',
    slug: 'migrate-employee-advocacy-program-dsmn8',
    category: getRandomCategory(),
    date: '2023-05-28',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'A step-by-step guide to seamlessly transitioning your employee advocacy program to the DSMN8 platform.',
    content: 'Transitioning your employee advocacy program to a new platform can seem daunting, but with proper planning, the migration to DSMN8 can be smooth and efficient. This comprehensive guide walks you through the entire process, from initial data assessment and user onboarding to content migration and program relaunch. We outline key considerations for maintaining momentum during the transition, communicating changes to your employees, and ensuring your advocacy metrics remain consistent. Our proven migration methodology has helped hundreds of organizations successfully make the switch with minimal disruption and maximum growth potential.'
  },
  {
    id: 9,
    title: 'How to Choose the Best Employee Advocacy Platform for Your Organization',
    slug: 'choose-best-employee-advocacy-platform',
    category: getRandomCategory(),
    date: '2023-05-22',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Navigate the crowded marketplace of employee advocacy solutions with our expert guidance on finding the perfect platform match.',
    content: 'Selecting the right employee advocacy platform is a critical decision that impacts program adoption, sustainability, and ROI. This guide helps you navigate the evaluation process by breaking down the essential features and functionalities to consider, from content curation capabilities and analytics to user experience and integration options. We provide a framework for assessing your organization\'s specific needs and matching them to platform capabilities. The article includes a comprehensive comparison methodology, questions to ask vendors, and insights from program managers who have successfully implemented different solutions. Whether you\'re launching your first advocacy program or considering a platform switch, this resource will help you make an informed decision.'
  },
  {
    id: 10,
    title: 'We Analyzed 11,107 Employee LinkedIn Posts and This Is What We Found',
    slug: 'analysis-employee-linkedin-posts',
    category: getRandomCategory(),
    date: '2023-05-18',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Our data analysis reveals surprising insights about what makes employee content successful on LinkedIn.',
    content: 'In this deep-dive analysis of over 11,000 employee LinkedIn posts, we uncovered compelling patterns that challenge conventional wisdom about content strategy. Personal stories featuring workplace experiences generated 3.7x more engagement than corporate reposts. Posts with authentic images outperformed stock photos by 2.5x, while content under 150 words received 58% more interactions than longer posts. Industry insights and behind-the-scenes content emerged as top-performing categories across all sectors. We also found that Thursday mornings yielded peak engagement, and posts with fewer than three hashtags performed substantially better than those with more. These insights provide valuable direction for optimizing your employee advocacy content strategy for maximum impact on LinkedIn.'
  },
  {
    id: 11,
    title: 'Procore\'s Melissa Heidmiller: Getting Internal Buy-In for Advocacy',
    slug: 'procore-internal-buy-in-advocacy',
    category: getRandomCategory(),
    date: '2023-04-25',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Discover how Melissa gained internal buy-in for an employee advocacy program at Procore Technologies.',
    content: 'In this insightful interview, Melissa Heidmiller, Senior Social Media Manager at Procore Technologies, shares her proven strategies for securing leadership buy-in for employee advocacy initiatives. Melissa reveals how she transformed initial skepticism into enthusiastic support by focusing on measurable business outcomes aligned with company priorities. Her approach centered on a carefully designed pilot program that generated compelling metrics and testimonials, creating internal champions across departments. By framing advocacy as a solution to existing business challenges rather than another communications program, she successfully integrated it into Procore\'s broader marketing and employer branding strategy. Melissa also discusses her methods for tracking impact, communicating value to different stakeholders, and evolving the program as the company grew.'
  },
  {
    id: 12,
    title: 'The Executive\'s Guide to LinkedIn Thought Leadership',
    slug: 'executive-guide-linkedin-thought-leadership',
    category: getRandomCategory(),
    date: '2023-04-18',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'A comprehensive roadmap for executives to establish authentic thought leadership on LinkedIn.',
    content: 'For executives, LinkedIn represents an unparalleled opportunity to shape industry conversations and establish credible thought leadership. This comprehensive guide walks C-suite leaders through a strategic approach to LinkedIn presence, from profile optimization and content planning to engagement strategies and performance measurement. We outline the specific content types that resonate with decision-makers, techniques for balancing personal voice with corporate messaging, and methods for amplifying reach through employee networks. The guide includes practical workflows that respect executives\' limited time while maximizing visibility and influence. With implementation advice from executives who have successfully built influential LinkedIn profiles, this resource provides a clear pathway to thought leadership that delivers business value.'
  },
  {
    id: 13,
    title: 'Activating Your Employees as Social Sellers: Strategy Framework',
    slug: 'employees-social-sellers-framework',
    category: getRandomCategory(),
    date: '2023-04-12',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Transform your sales team\'s social media presence with this proven social selling activation framework.',
    content: 'This strategic framework provides a structured approach to transforming your employees into effective social sellers who build relationships and drive revenue through social media. Based on successful implementations across multiple industries, the guide outlines a five-phase activation process that addresses the unique challenges of social selling adoption. Key components include profile optimization guidelines, content libraries tailored for different stages of the sales funnel, engagement protocols, and metrics that connect social activity to pipeline impact. We also cover how to integrate social selling with existing CRM and sales processes, creating a seamless experience for your team. The framework is adaptable to both B2B and B2C contexts, with specialized considerations for each sales environment.'
  },
  {
    id: 14,
    title: 'The ROI of Employee Advocacy: Measuring What Matters',
    slug: 'roi-employee-advocacy-measurement',
    category: getRandomCategory(),
    date: '2023-04-08',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Learn how to calculate and communicate the true business impact of your employee advocacy program.',
    content: 'Demonstrating the ROI of employee advocacy requires looking beyond basic engagement metrics to quantify concrete business outcomes. This comprehensive guide introduces a multi-dimensional measurement framework that captures both the direct and indirect impacts of your advocacy program. We outline methodologies for calculating cost savings in paid media, attributing leads and conversions to employee-shared content, and quantifying the value of expanded organic reach. The guide also addresses how to measure less tangible benefits like brand sentiment improvement and employee engagement uplift. Complete with calculation templates, benchmark data, and executive reporting formats, this resource gives you the tools to demonstrate advocacy\'s contribution to marketing efficiency, sales acceleration, talent attraction, and overall business growth.'
  },
  {
    id: 15,
    title: 'Building an Employee Advocacy Content Strategy That Works',
    slug: 'employee-advocacy-content-strategy',
    category: getRandomCategory(),
    date: '2023-04-02',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Develop a sustainable content strategy that keeps employees engaged and drives program success.',
    content: 'The most successful employee advocacy programs are built on strategic content foundations that balance company priorities with employee interests. This guide walks through the development of a sustainable content strategy that maintains program momentum and delivers measurable results. We cover content mix optimization across different formats and purposes, from thought leadership and recruitment to product information and company culture. The article includes practical advice on content sourcing workflows, curation criteria, and adaptation processes that make corporate content more shareable by employees. We also address content governance, approval workflows, and scheduling best practices that help program managers maintain quality and consistency while reducing administrative burden.'
  },
  {
    id: 16,
    title: 'Employee Influence Index: Top Companies Empowering Their Teams',
    slug: 'employee-influence-index-top-companies',
    category: getRandomCategory(),
    date: '2023-03-28',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Discover which organizations lead the way in empowering employees as authentic brand voices.',
    content: 'Our latest Employee Influence Index identifies and analyzes the companies setting the standard for employee advocacy and influence. This research examines how leading organizations across industries are strategically empowering their workforce to amplify brand messages, share expertise, and build credible industry presence. The index evaluates companies based on program participation rates, content engagement, authentic voice cultivation, and integration with broader marketing and communications strategies. Case highlights include Adobe\'s creative professional spotlights, IBM\'s technical expert program, and HubSpot\'s content creation approach. By benchmarking against these best practices, you can identify opportunities to enhance your own employee influence initiatives and drive stronger results.'
  },
  {
    id: 17,
    title: 'Creating a Culture of Employee Advocacy: Beyond the Platform',
    slug: 'culture-employee-advocacy',
    category: getRandomCategory(),
    date: '2023-03-25',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Learn how to build organizational culture that naturally supports and encourages employee advocacy.',
    content: 'While technology platforms provide the foundation for employee advocacy programs, long-term success depends on building a culture where advocacy becomes a natural extension of employee experience. This in-depth article examines the cultural elements that support sustainable advocacy, from leadership modeling and transparent communication to recognition systems and skills development. We explore how companies like Salesforce, Dell, and SAP have integrated advocacy into their organizational DNA, making content sharing and thought leadership part of everyday work life. The guide includes practical strategies for overcoming common cultural barriers, fostering authentic engagement, and evolving your approach as your organization grows. By focusing on these cultural foundations, you can transform your advocacy program from a marketing initiative into a powerful expression of your company\'s values and employee experience.'
  },
  {
    id: 18,
    title: 'Global Employee Advocacy Trends: Regional Differences That Matter',
    slug: 'global-employee-advocacy-trends',
    category: getRandomCategory(),
    date: '2023-03-20',
    image: 'https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Understand how cultural and regulatory differences impact employee advocacy across global markets.',
    content: 'For multinational organizations, a one-size-fits-all approach to employee advocacy often falls short of addressing regional variations in social media usage, cultural attitudes, and regulatory environments. This comprehensive analysis examines how employee advocacy manifests differently across major global markets, from content preferences and platform dominance to participation drivers and compliance considerations. The research reveals significant differences in what motivates employees to share in different regions, which platforms drive the most impact, and how program governance should adapt to local contexts. With insights drawn from over 50 global programs, this guide provides practical recommendations for balancing global consistency with local relevance, ensuring your employee advocacy strategy succeeds across all your operating regions.'
  },
  {
    id: 19,
    title: 'From Reluctant to Influential: How to Engage Non-Social Employees',
    slug: 'engage-non-social-employees',
    category: getRandomCategory(),
    date: '2023-03-15',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Strategies for bringing reluctant employees into your advocacy program and helping them become confident participants.',
    content: 'Not every employee naturally embraces social media, yet these reluctant participants often represent untapped potential for authentic advocacy. This guide focuses on strategies for engaging employees who are hesitant to participate in advocacy programs due to social media anxiety, privacy concerns, or uncertainty about what to share. We outline a progressive engagement model that starts with minimal-effort participation options and gradually builds confidence through training, peer support, and recognition. The article features success stories from organizations that have effectively activated previously non-social employees, including technical experts, manufacturing teams, and senior executives. By implementing these approaches, you can significantly expand program participation beyond your marketing and sales teams, creating a more representative and powerful employee voice.'
  },
  {
    id: 20,
    title: 'The Future of Employee Advocacy: AI, Personalization, and Integration',
    slug: 'future-employee-advocacy',
    category: getRandomCategory(),
    date: '2023-03-10',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Explore emerging trends and technologies shaping the next generation of employee advocacy programs.',
    content: 'The employee advocacy landscape is evolving rapidly, with emerging technologies and changing workplace dynamics creating new possibilities for program innovation. This forward-looking analysis examines the key trends that will shape advocacy over the next three to five years, including AI-powered content personalization, deeper integration with marketing technology stacks, and the rise of video-first employee content. We explore how advanced analytics are enabling more precise measurement of advocacy impact, while new platform capabilities are creating opportunities for more authentic and diverse employee voices. The article also addresses how shifts in workplace models, from remote work to the gig economy, are necessitating new approaches to advocacy engagement and activation. By understanding these coming changes, program leaders can position their initiatives for continued growth and adaptation.'
  }
];

// Randomly select 5 posts to mark as trending
const shuffledIndexes = shuffleArray([...Array(allPosts.length).keys()]);
const trendingIndexes = shuffledIndexes.slice(0, 5);

// Add trending flag to the randomly selected posts
export const posts = allPosts.map((post, index) => ({
  ...post,
  trending: trendingIndexes.includes(index)
}));

export default posts; 