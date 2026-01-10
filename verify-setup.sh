#!/usr/bin/env bash
# YNIT Project - Installation & Verification Checklist
# This file helps verify that the project is properly set up

echo "================================"
echo "YNIT Project Setup Verification"
echo "================================"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed (node_modules exists)"
else
    echo "❌ Dependencies not installed - run: npm install"
fi

# Check critical files
echo ""
echo "Checking critical files:"
files=(
    "package.json"
    "tsconfig.json"
    "next.config.js"
    "tailwind.config.ts"
    "postcss.config.js"
    ".eslintrc.json"
    "app/layout.tsx"
    "app/page.tsx"
    "components/Header.tsx"
    "components/Footer.tsx"
    "components/Section.tsx"
    "components/Card.tsx"
    "components/CTA.tsx"
    "data/tours.ts"
    "data/dokumen.ts"
    "data/study.ts"
    "data/medical.ts"
    "lib/whatsapp.ts"
    "lib/format.ts"
    "styles/globals.css"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file (MISSING)"
    fi
done

# Check folders
echo ""
echo "Checking folders:"
folders=(
    "app"
    "components"
    "data"
    "lib"
    "styles"
    "public"
)

for folder in "${folders[@]}"; do
    if [ -d "$folder" ]; then
        echo "  ✅ $folder/"
    else
        echo "  ❌ $folder/ (MISSING)"
    fi
done

# Check dynamic routes
echo ""
echo "Checking dynamic routes:"
routes=(
    "app/tour/[slug]"
    "app/dokumen/[slug]"
    "app/study/[slug]"
    "app/medical/[slug]"
)

for route in "${routes[@]}"; do
    if [ -f "$route/page.tsx" ]; then
        echo "  ✅ $route/page.tsx"
    else
        echo "  ❌ $route/page.tsx (MISSING)"
    fi
done

echo ""
echo "================================"
echo "✅ Setup verification complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. npm run dev      - Start development server"
echo "2. npm run build    - Build for production"
echo "3. npm run lint     - Check for linting errors"
echo ""
