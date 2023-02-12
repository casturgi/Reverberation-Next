export interface MainContext {
    message?: string;
    messageType?: string;
    messageLinkText?: string;
    messageLinkURL?: string;
}

export type Actions =
    | {
          type: "ERROR_MESSAGE";
          message: string;
          messageLinkText?: string;
          messageLinkURL?: string;
      }
    | {
          type: "SUCCESS_MESSAGE";
          message: string;
          messageLinkText?: string;
          messageLinkURL?: string;
      }
    | {
          type: "INFO_MESSAGE";
          message: string;
          messageLinkText?: string;
          messageLinkURL?: string;
      }
    | {
          type: "CLEAR_MESSAGE";
      };
