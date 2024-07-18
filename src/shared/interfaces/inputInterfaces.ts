/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../../constants';

export const VARIANTS_INPUT = [
  VARIANT_PRIMARY,
  VARIANT_ERROR,
  VARIANT_BASE,
] as const;
export const SIZES_INPUT = [SIZE_XS, SIZE_SM, SIZE_MD, SIZE_LG] as const;
export const VARIANTS_TAG = [VARIANT_PRIMARY, VARIANT_BASE] as const;

export type Variant = (typeof VARIANTS_INPUT)[number];
export type Size = (typeof SIZES_INPUT)[number];
export type VariantTag = (typeof VARIANTS_TAG)[number];

interface defaultInput {
  variant?: Variant;
  errorState?: boolean;
  sizeType?: Size;
}

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
    defaultInput {}

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<defaultInput, 'sizeType'> {}


