export interface PropsInput {
    disabled?: boolean;
    readonly?: boolean;
    loading?: boolean;
    // rules?: rulesInput[];
    label?: string;
    placeholder?: string;
    clearable?: boolean;
}


export interface BaseGrid {
    cols?: string | number;
    // xxl?: string | number;
    xl?: string | number;
    lg?: string | number;
    md?: string | number;
    sm?: string | number;
    xs?: string | number;
    offset?: string | number;
    offsetMd?: string | number;
    offsetSm?: string | number;
}