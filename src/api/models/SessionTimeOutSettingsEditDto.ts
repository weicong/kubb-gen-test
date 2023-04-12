export type SessionTimeOutSettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    isEnabled?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    timeOutSecond?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    showTimeOutNotificationSecond?: number | undefined;
    /**
    * @type boolean | undefined
    */
    showLockScreenWhenTimedOut?: boolean | undefined;
};
