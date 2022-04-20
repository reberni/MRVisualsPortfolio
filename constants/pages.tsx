// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'MR Visuals',
    description:
      'theBag is a multipurpose template made by Nextjs and MUI v5 which can be used for Portfolios, Resumes, CVs, and Personal websites.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all our projects as a filmer and photographer in this page.',
  },
  hireUs: {
    title: 'Hire Us',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
};

export default pages;
