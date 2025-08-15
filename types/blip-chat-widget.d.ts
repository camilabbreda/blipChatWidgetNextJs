// types/blip-chat-widget.d.ts
declare module "blip-chat-widget" {
  export class BlipChat {
    constructor();
    withAppKey(appKey: string): this;
    withButton(options: { color: string; icon: string }): this;
    withAuth(options: {
      authType: string;
      userIdentity: string;
      userPassword: string;
    }): this;
    withAccount(options: {
      fullName?: string;
      email?: string;
      phoneNumber?: string;
      city?: string;
      extras: Record<string, any>;
    }): this;
    withEventHandler(event: string, handler: () => void): this;
    withTarget(target: string): this;
    withCustomStyle(style: string): this;
    withCustomCommonUrl(url: string): this;
    build(): void;
  }

  export const DEV_AUTH: string;
  export const ENTER_EVENT: string;
  export const LEAVE_EVENT: string;
  export const LOAD_EVENT: string;
  export const CREATE_ACCOUNT_EVENT: string;
}
