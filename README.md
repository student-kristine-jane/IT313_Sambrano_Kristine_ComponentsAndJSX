# IT313 Components and JSX

## Problem

The goal of this laboratory is to create reusable React Native components that display a list of students using props, JSX expressions, conditional rendering, and list keys.

## Component Structure

### StudentCard

StudentCard is a reusable component that receives the following props:

- name
- course
- units
- isFullLoad

It displays the student's information and shows the "Full Load" label when isFullLoad is true.

### StudentRoster

StudentRoster contains the students array and uses the map() method to create one StudentCard for each student.

Each StudentCard uses the student's id as its key.

The roster also displays the total number of students using a JSX expression.

## How to Run

Install the project dependencies:

```bash
npm install
```
