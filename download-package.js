#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📦 MacroPilot Web App - Complete Source Code');
console.log('='.repeat(50));

const projectStructure = {
  'src/': [
    'App.tsx',
    'main.tsx', 
    'index.css'
  ],
  'src/components/': [
    'Header.tsx',
    'StatCard.tsx',
    'NavigationSidebar.tsx'
  ],
  'src/components/sections/': [
    'LandingPage.tsx',
    'Overview.tsx',
    'ScientificValidation.tsx',
    'MarketDemand.tsx',
    'AppFeatures.tsx',
    'MedicalConsiderations.tsx',
    'RevenueModel.tsx',
    'BudgetBreakdown.tsx',
    'DeveloperBlueprint.tsx',
    'References.tsx'
  ],
  'ios-app/MacroPilot/': [
    'MacroPilotApp.swift',
    'ContentView.swift',
    'Info.plist'
  ],
  'ios-app/MacroPilot/Views/': [
    'OnboardingView.swift',
    'DashboardView.swift',
    'FoodLoggingView.swift',
    'WorkoutView.swift',
    'ProgressView.swift',
    'ProfileView.swift',
    'MealOrderingView.swift'
  ],
  'ios-app/MacroPilot/Models/': [
    'UserProfile.swift',
    'NutritionModels.swift',
    'WorkoutModels.swift'
  ],
  'ios-app/MacroPilot/Services/': [
    'UserManager.swift',
    'NutritionManager.swift',
    'HealthManager.swift'
  ],
  'config/': [
    'package.json',
    'vite.config.ts',
    'tailwind.config.js',
    'tsconfig.json',
    'tsconfig.app.json',
    'tsconfig.node.json',
    'eslint.config.js',
    'postcss.config.js'
  ],
  'root/': [
    'index.html',
    'README.md'
  ]
};

console.log('📁 Project Structure:');
console.log('');

Object.entries(projectStructure).forEach(([folder, files]) => {
  console.log(`📂 ${folder}`);
  files.forEach(file => {
    console.log(`   📄 ${file}`);
  });
  console.log('');
});

console.log('🚀 To get the complete code:');
console.log('1. Copy all files from the Bolt file explorer');
console.log('2. Use browser developer tools to download');
console.log('3. Or manually copy each file content');
console.log('');
console.log('📱 iOS App: Complete SwiftUI implementation included');
console.log('🌐 Web App: React + TypeScript + Tailwind CSS');
console.log('📊 Research Dashboard: Comprehensive market analysis');
console.log('');
console.log('💡 Total Files: 35+ source files');
console.log('📦 Ready for production deployment');