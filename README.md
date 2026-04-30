# 🎯 Sprint 2 – Interactive JS Component (Carousel)

## 📌 Project Overview
This project is a **vanilla JavaScript image carousel** that displays different web development languages. It allows users to navigate through items using previous and next buttons.

The goal of this project is to demonstrate:
- Separation of concerns (Data, UI, Logic)
- Clean Git workflow using branches and pull requests
- Handling of edge cases
- Writing maintainable and readable JavaScript

---

## 🚀 Features

### ✅ Data Layer
- Structured `languages` array
- Each item includes:
  - name
  - image
  - description

### ✅ UI Layer
- Carousel layout with:
  - Image
  - Title
  - Description
- Navigation buttons (Next / Previous)
- Clean and responsive styling

### ✅ Navigation Logic
- Next and Previous buttons update the current item
- Uses `currentIndex` state
- Wrap-around logic using modulus operator

### ✅ Edge Case Handling
- Displays **"No results found"** if no data is available
- Resets carousel when input is empty (if search is implemented)
- Prevents application crashes on invalid states

---

## 🧠 How It Works

1. **Data**
   - Stored in an array of objects (`languages`)

2. **State**
   - `currentIndex` tracks the current item being displayed

3. **Rendering**
   - `renderLanguage(index)` updates the DOM with the selected item

4. **Event Handling**
   - Buttons update `currentIndex`
   - UI re-renders on every interaction

---

## 🗂️ Project Structure
