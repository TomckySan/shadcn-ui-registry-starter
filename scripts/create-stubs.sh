#!/bin/bash

# OutSystems component stubs generator
# Creates placeholder components for all patterns defined in outsystems-patterns.json

COMPONENTS_DIR="src/components"

# List of components that need stub files
COMPONENTS=(
  "os-section"
  "os-gallery"
  "os-tabs"
  "os-sidebar"
  "os-breadcrumbs"
  "os-menu"
  "os-modal"
  "os-tooltip"
  "os-notification"
  "os-floating-actions"
  "os-table"
  "os-data-grid"
  "os-list"
  "os-search"
  "os-input"
  "os-checkbox"
  "os-radio"
  "os-switch"
  "os-dropdown"
  "os-progress-bar"
  "os-progress-circle"
  "os-badge"
  "os-alert"
  "os-skeleton"
)

for component in "${COMPONENTS[@]}"; do
  # Convert kebab-case to PascalCase (e.g., os-data-grid -> OSDataGrid)
  component_name=$(echo "$component" | sed -r 's/(^|-)([a-z])/\U\2/g')

  file_path="$COMPONENTS_DIR/${component}.tsx"

  echo "Creating stub for $component_name..."

  cat > "$file_path" << EOF
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ${component_name} Component (OutSystems UI Pattern)
 *
 * TODO: Implement this component
 * This is a placeholder stub for the ${component_name} pattern.
 */

export interface ${component_name}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add specific props here
}

const ${component_name} = React.forwardRef<HTMLDivElement, ${component_name}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-lg border bg-card p-6 text-card-foreground shadow-sm", className)}
        {...props}
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">${component_name}</h3>
          <p className="text-sm text-muted-foreground">
            This is a placeholder for the ${component_name} component.
            Implementation coming soon.
          </p>
          {children}
        </div>
      </div>
    );
  }
);
${component_name}.displayName = "${component_name}";

export { ${component_name} };
EOF

  echo "✓ Created $file_path"
done

echo ""
echo "✅ All stub components created successfully!"
echo "   Total: ${#COMPONENTS[@]} components"
