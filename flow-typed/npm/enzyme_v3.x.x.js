declare module "enzyme" {
  import type { ElementRef } from 'react';
  declare class Wrapper<C> {
    instance(): $Call<<C>(Class<C>) => C, $ElementType<C, 'type'>>;
    instance(): ElementRef<C>;
  }

  declare class ShallowWrapper<C> extends Wrapper<C> {}

  declare export function shallow<C>(node: C): ShallowWrapper<C>;
}
