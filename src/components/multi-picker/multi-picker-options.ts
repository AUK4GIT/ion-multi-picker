export interface MultiPickerOption {
  text?: string;
  title?: string;
  value?: any;
  parentVal?: any;
  disabled?: boolean;
}

export interface MultiPickerColumn {
  name?: string;
  parentCol?: string;
  alias?: string;
  columnWidth?: string;
  options?: MultiPickerOption[];
}
