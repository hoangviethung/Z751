export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',


  // Đây là menu mặc định của admin lte
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {
      label: 'Dashboard',
      route: '/admin/dashboard',
      routeActive: 'admin/dashboard',
      iconClasses: 'fa fa-circle-o'
    }
  ],

  // Menu nay la flexible menu neu muốn change. Xem trong file Administrator.component.ts
  sidebarInternalUserLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {
      label: 'My tasks',
      route: '/admin/my-tasks',
      routeActive: 'admin/my-tasks',
      iconClasses: 'fa fa-circle-o'
    },
    {
      label: 'Order Management',
      route: '/admin/order-management',
      routeActive: 'admin/order-management',
      iconClasses: 'fa fa-circle-o'
    },
    {
      label: 'Administration',
      route: '/admin/administration',
      routeActive: 'admin/administration',
      iconClasses: 'fa fa-circle-o'
    },
  ],
  sidebarContractorLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {
      label: 'My tasks',
      route: '/admin/my-tasks',
      routeActive: 'admin/my-tasks',
      iconClasses: 'fa fa-circle-o'
    }
  ]
};
