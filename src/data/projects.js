export const projectPaths = {
  oscarMobilePro: '/projects/oscar-mobile-pro',
  purolatorMobileAppRedesign: '/projects/purolator-mobile-app-redesign',
  purolatorEmployeeCouponPortal: '/projects/purolator-employee-coupon-portal',
  iotMobileApp: '/projects/iot-mobile-app',
  salesManagementWebsite: '/projects/sales-management-website',
  brandingPackage: '/projects/branding-package',
};

export const projects = [
  {
    path: projectPaths.oscarMobilePro,
    title: 'OSCAR Mobile Pro',
    subtitle: 'Product Design • UX/UI • Frontend',
    description: 'Design and development of a mobile EMR focused on clinician workflows.',
    thumbnail: '/images/oscar/oscar-overview.jpg',
    category: 'UX',
    featuredHome: true,
  },
  {
    path: projectPaths.purolatorMobileAppRedesign,
    title: 'Purolator Mobile App Redesign',
    subtitle: 'UX Design',
    description: "Modernizing an enterprise mobile experience with Purolator's evolving design system.",
    thumbnail: '/images/purolator-mobile-app/purolator-mobile-redesign-overview.jpg',
    category: 'UX',
    featuredHome: true,
  },
  {
    path: projectPaths.purolatorEmployeeCouponPortal,
    title: 'Purolator Employee Coupon Portal',
    subtitle: 'UI / UX Design',
    description: 'Designing a lightweight internal portal for quick access to shipping coupons.',
    thumbnail: '/images/purolator-coupon-portal/purolator-coupon-portal-overview.jpg',
    category: 'UX',
    featuredHome: false,
  },
  {
    path: projectPaths.iotMobileApp,
    title: 'IoT Mobile App',
    subtitle: 'UX Design',
    description: 'A user-friendly app design to improve customer experience.',
    thumbnail: '/images/IoT/iot-overview.jpg',
    category: 'UX',
    featuredHome: false,
  },
  {
    path: projectPaths.salesManagementWebsite,
    title: 'Sales Management Website',
    subtitle: 'Web Development',
    description: 'A responsive and scalable sales management platform.',
    thumbnail: '/images/project2-thumbnail.jpg',
    category: 'Programming',
    featuredHome: false,
  },
  {
    path: projectPaths.brandingPackage,
    title: 'Branding Package',
    subtitle: 'Graphic Design',
    description: 'A complete branding solution for a startup company.',
    thumbnail: '/images/project3-thumbnail.jpg',
    category: 'Design',
    featuredHome: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featuredHome);
