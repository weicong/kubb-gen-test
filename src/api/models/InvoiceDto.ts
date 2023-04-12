export type InvoiceDto = {
    /**
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @type string | undefined
    */
    editionDisplayName?: string | undefined;
    /**
    * @type string | undefined
    */
    invoiceNo?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    invoiceDate?: string | undefined;
    /**
    * @type string | undefined
    */
    tenantLegalName?: string | undefined;
    /**
    * @type array | undefined
    */
    tenantAddress?: string[] | undefined;
    /**
    * @type string | undefined
    */
    tenantTaxNo?: string | undefined;
    /**
    * @type string | undefined
    */
    hostLegalName?: string | undefined;
    /**
    * @type array | undefined
    */
    hostAddress?: string[] | undefined;
};
