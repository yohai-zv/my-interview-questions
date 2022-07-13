import { CSSProperties } from 'react';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;



export type appStructure = contentBlock | Array<contentBlock>;
export type contentBlock = title | photo | section | anchor | tab;



export type title = commonContentBlock<'title'>;
export type photo = commonContentBlock<'photo'> & {
  src: string;
  tooltip: string;
};
export type section = commonContentBlock<'section'>;
export type anchor = commonContentBlock<'anchor'> & {
  href: string;
};;
export type tab = commonContentBlock<'tab'>;


export type commonContentBlock<T extends string> = {
  type: T;
  value?: string;
  description?: string;
  children?: Array<contentBlock>
  style?: CSSProperties;
}