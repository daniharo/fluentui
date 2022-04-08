## API Report File for "@fluentui/react-accordion"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ARIAButtonSlotProps } from '@fluentui/react-aria';
import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { Context } from '@fluentui/react-context-selector';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Accordion: ForwardRefComponent<AccordionProps>;

// @public @deprecated (undocumented)
export const accordionClassName = "fui-Accordion";

// @public (undocumented)
export const accordionClassNames: SlotClassNames<AccordionSlots>;

// @public (undocumented)
export const AccordionContext: Context<AccordionContextValue>;

// @public (undocumented)
export type AccordionContextValue = Omit<AccordionCommons, 'multiple'> & {
    openItems: AccordionItemValue[];
    requestToggle: (event: AccordionToggleEvent, data: AccordionToggleData) => void;
};

// @public (undocumented)
export type AccordionContextValues = {
    accordion: AccordionContextValue;
};

// @public
export const AccordionHeader: ForwardRefComponent<AccordionHeaderProps>;

// @public @deprecated (undocumented)
export const accordionHeaderClassName = "fui-AccordionHeader";

// @public (undocumented)
export const accordionHeaderClassNames: SlotClassNames<AccordionHeaderSlots>;

// @public (undocumented)
export type AccordionHeaderContextValue = {
    disabled: boolean;
    open: boolean;
    expandIconPosition: AccordionHeaderExpandIconPosition;
    size: AccordionHeaderSize;
};

// @public (undocumented)
export type AccordionHeaderContextValues = {
    accordionHeader: AccordionHeaderContextValue;
};

// @public (undocumented)
export type AccordionHeaderExpandIconPosition = 'start' | 'end';

// @public (undocumented)
export type AccordionHeaderProps = ComponentProps<Partial<AccordionHeaderSlots>> & Partial<AccordionHeaderCommons>;

// @public (undocumented)
export type AccordionHeaderSize = 'small' | 'medium' | 'large' | 'extra-large';

// @public (undocumented)
export type AccordionHeaderSlots = {
    root: Slot<'div', 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
    button: NonNullable<Slot<ARIAButtonSlotProps>>;
    expandIcon: Slot<'span'>;
    icon?: Slot<'div'>;
};

// @public (undocumented)
export type AccordionHeaderState = ComponentState<AccordionHeaderSlots> & AccordionHeaderCommons & AccordionHeaderContextValue;

// @public (undocumented)
export type AccordionIndex = number | number[];

// @public
export const AccordionItem: ForwardRefComponent<AccordionItemProps>;

// @public @deprecated (undocumented)
export const accordionItemClassName = "fui-AccordionItem";

// @public (undocumented)
export const accordionItemClassNames: SlotClassNames<AccordionItemSlots>;

// @public (undocumented)
export const AccordionItemContext: React_2.Context<AccordionItemContextValue>;

// @public (undocumented)
export type AccordionItemContextValue = Omit<AccordionItemCommons, 'value'> & {
    open: boolean;
    onHeaderClick(ev: React_2.MouseEvent | React_2.KeyboardEvent): void;
};

// @public (undocumented)
export type AccordionItemContextValues = {
    accordionItem: AccordionItemContextValue;
};

// @public (undocumented)
export type AccordionItemProps = ComponentProps<AccordionItemSlots> & Partial<AccordionItemCommons> & Pick<AccordionItemCommons, 'value'>;

// @public (undocumented)
export type AccordionItemSlots = {
    root: Slot<'div'>;
};

// @public (undocumented)
export type AccordionItemState = ComponentState<AccordionItemSlots> & AccordionItemCommons & AccordionItemContextValue;

// @public (undocumented)
export type AccordionItemValue = unknown;

// @public
export const AccordionPanel: ForwardRefComponent<AccordionPanelProps>;

// @public @deprecated (undocumented)
export const accordionPanelClassName = "fui-AccordionPanel";

// @public (undocumented)
export const accordionPanelClassNames: SlotClassNames<AccordionPanelSlots>;

// @public (undocumented)
export type AccordionPanelProps = ComponentProps<AccordionPanelSlots>;

// @public (undocumented)
export type AccordionPanelSlots = {
    root: Slot<'div'>;
};

// @public (undocumented)
export type AccordionPanelState = ComponentState<AccordionPanelSlots> & {
    open: boolean;
};

// @public (undocumented)
export type AccordionProps = ComponentProps<AccordionSlots> & Partial<AccordionCommons> & {
    openItems?: AccordionItemValue | AccordionItemValue[];
    defaultOpenItems?: AccordionItemValue | AccordionItemValue[];
    onToggle?: AccordionToggleEventHandler;
};

// @public (undocumented)
export type AccordionSlots = {
    root: Slot<'div'>;
};

// @public (undocumented)
export type AccordionState = ComponentState<AccordionSlots> & AccordionCommons & AccordionContextValue;

// @public (undocumented)
export type AccordionToggleData = {
    value: AccordionItemValue;
};

// @public (undocumented)
export type AccordionToggleEvent<E = HTMLElement> = React_2.MouseEvent<E> | React_2.KeyboardEvent<E>;

// @public (undocumented)
export type AccordionToggleEventHandler = (event: AccordionToggleEvent, data: AccordionToggleData) => void;

// @public
export const renderAccordion_unstable: (state: AccordionState, contextValues: AccordionContextValues) => JSX.Element;

// @public
export const renderAccordionHeader_unstable: (state: AccordionHeaderState, contextValues: AccordionHeaderContextValues) => JSX.Element;

// @public
export const renderAccordionItem_unstable: (state: AccordionItemState, contextValues: AccordionItemContextValues) => JSX.Element;

// @public
export const renderAccordionPanel_unstable: (state: AccordionPanelState) => JSX.Element | null;

// @public
export const useAccordion_unstable: (props: AccordionProps, ref: React_2.Ref<HTMLElement>) => AccordionState;

// @public (undocumented)
export function useAccordionContextValues_unstable(state: AccordionState): AccordionContextValues;

// @public
export const useAccordionHeader_unstable: (props: AccordionHeaderProps, ref: React_2.Ref<HTMLElement>) => AccordionHeaderState;

// @public (undocumented)
export function useAccordionHeaderContextValues_unstable(state: AccordionHeaderState): AccordionHeaderContextValues;

// @public
export const useAccordionHeaderStyles_unstable: (state: AccordionHeaderState) => AccordionHeaderState;

// @public
export const useAccordionItem_unstable: (props: AccordionItemProps, ref: React_2.Ref<HTMLElement>) => AccordionItemState;

// @public (undocumented)
export const useAccordionItemContext_unstable: () => AccordionItemContextValue;

// @public (undocumented)
export function useAccordionItemContextValues_unstable(state: AccordionItemState): AccordionItemContextValues;

// @public (undocumented)
export const useAccordionItemStyles_unstable: (state: AccordionItemState) => AccordionItemState;

// @public
export const useAccordionPanel_unstable: (props: AccordionPanelProps, ref: React_2.Ref<HTMLElement>) => AccordionPanelState;

// @public
export const useAccordionPanelStyles_unstable: (state: AccordionPanelState) => AccordionPanelState;

// @public (undocumented)
export const useAccordionStyles_unstable: (state: AccordionState) => AccordionState;

// (No @packageDocumentation comment for this package)

```