# Accessibility Notes

## Hand-built components vs shadcn/ui

I built the Modal Dialog, Tabs, and Disclosure components manually first so I could understand their accessibility patterns and keyboard behavior.

After inspecting the generated shadcn/ui Dialog and Tabs components, I found several concrete differences.

### 1. Focus and interaction management

My hand-built Modal explicitly implemented focus management, including initial focus, focus trapping, Escape-to-close behavior, and returning focus to the trigger.

The shadcn Dialog delegates these interaction and accessibility behaviors to the Base UI Dialog primitive instead of implementing the focus logic directly in the component.

### 2. Component composition

My Modal is a single purpose-built component.

The shadcn Dialog is split into composable primitives such as `DialogTrigger`, `DialogContent`, `DialogOverlay`, `DialogClose`, `DialogTitle`, and `DialogDescription`. This makes the component more flexible and reusable.

### 3. Keyboard navigation in Tabs

My Tabs implementation manually handles keyboard navigation and active-tab behavior.

The shadcn Tabs component delegates those interaction details to the Base UI Tabs primitive, which provides the underlying Tabs behavior.

### 4. Tabs orientation and variants

My Tabs implementation only supports a horizontal layout.

The shadcn implementation supports both horizontal and vertical orientations and provides reusable visual variants for the TabsList.

## What I learned

Building the components manually first made the accessibility requirements much clearer. In particular, I had to think explicitly about focus, keyboard interaction, ARIA relationships, and state management.

The shadcn implementation showed me that production components can keep the same accessibility goals while delegating complex interaction behavior to well-tested primitives. The generated code also separates behavior, composition, typing, and styling into reusable pieces.