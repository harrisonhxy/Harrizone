import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

export const HomeSection = forwardRef<
  HTMLElement,
  { children: React.ReactNode; className?: string; id?: string }
>((props, ref) => {
  return (
    <section
      id={props.id}
      ref={ref}
      className={cn('py-20 lg:py-32 mx-auto max-w-7xl', props.className)}
    >
      {props.children}
    </section>
  )
})

// 添加SectionTitle组件
export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <h2 className={cn('text-3xl md:text-4xl font-bold text-center mb-8', className)}>{children}</h2>
)

HomeSection.displayName = 'HomeSection'
SectionTitle.displayName = 'SectionTitle'
