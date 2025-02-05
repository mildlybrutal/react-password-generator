# Password Generator

A modern, secure password generator built with React that allows users to create customized passwords with various options and requirements.


## Features

- Generate random passwords with customizable length (6-20 characters)
- Include/exclude numbers
- Include/exclude special characters
- Password strength indicator
- One-click copy to clipboard
- Real-time password generation
- Responsive design
- Toast notifications for user feedback

## Technologies Used

- React
- React Hooks (useState, useEffect, useCallback, useRef)
- Tailwind CSS
- React Hot Toast

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/password-generator.git
```

2. Navigate to the project directory:
```bash
cd password-generator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173`

## Usage

1. Adjust the password length using the slider (6-20 characters)
2. Toggle numbers inclusion using the checkbox
3. Toggle special characters inclusion using the checkbox
4. Click "Generate" to create a new password
5. Click "Copy" to copy the password to your clipboard
6. The password strength indicator will show if your password is Very Weak, Weak, Medium, or Strong

## Component Structure

```jsx
App/
├── Password Display and Copy
├── Length Slider
├── Number Toggle
├── Special Characters Toggle
├── Generate Button
└── Strength Indicator
```

## Key Functions

- `generatePassword()`: Creates a random password based on selected criteria
- `getPasswordStrength()`: Calculates password strength based on length and character types
- `copyPasswordToClipboard()`: Copies generated password to clipboard

## Customization

### Styling
The project uses Tailwind CSS for styling. The main background color is set to `#FDE8C2`. You can modify the styles in the component classes or in your CSS file.

### Password Requirements
You can modify the password generation criteria by:
- Adjusting the minimum/maximum length in the range input
- Modifying the character sets in the `generatePassword` function
- Changing the strength calculation logic in `getPasswordStrength`

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Hot Toast for the notification system
