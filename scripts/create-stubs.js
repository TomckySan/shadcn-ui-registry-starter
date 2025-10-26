#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

const COMPONENTS = [
  "os-section",
  "os-gallery",
  "os-tabs",
  "os-sidebar",
  "os-breadcrumbs",
  "os-menu",
  "os-modal",
  "os-tooltip",
  "os-notification",
  "os-floating-actions",
  "os-table",
  "os-data-grid",
  "os-list",
  "os-search",
  "os-input",
  "os-checkbox",
  "os-radio",
  "os-switch",
  "os-dropdown",
  "os-progress-bar",
  "os-progress-circle",
  "os-badge",
  "os-alert",
  "os-skeleton"
];

function createStub(componentKebab) {
  const componentName = toPascalCase(componentKebab);
  const filePath = path.join(COMPONENTS_DIR, `${componentKebab}.tsx`);

  const content = `import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ${componentName} Component (OutSystems UI Pattern)
 *
 * TODO: Implement this component
 * This is a placeholder stub for the ${componentName} pattern.
 */

export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add specific props here
}

const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-lg border bg-card p-6 text-card-foreground shadow-sm", className)}
        {...props}
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">${componentName}</h3>
          <p className="text-sm text-muted-foreground">
            This is a placeholder for the ${componentName} component.
            Implementation coming soon.
          </p>
          {children}
        </div>
      </div>
    );
  }
);
${componentName}.displayName = "${componentName}";

export { ${componentName} };
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Created ${componentKebab}.tsx (${componentName})`);
}

console.log('Creating stub components...\n');

COMPONENTS.forEach(component => {
  createStub(component);
});

console.log(`\n✅ All stub components created successfully!`);
console.log(`   Total: ${COMPONENTS.length} components`);
