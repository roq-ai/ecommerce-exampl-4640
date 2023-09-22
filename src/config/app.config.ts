interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Admin'],
  tenantName: 'Business',
  applicationName: 'ecommerce example',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage product', 'Manage order', 'Manage user', 'Manage business'],
  getQuoteUrl: 'https://app.roq.ai/proposal/fb6304da-a91f-4a1b-a80d-2f84f3c4a744',
};
