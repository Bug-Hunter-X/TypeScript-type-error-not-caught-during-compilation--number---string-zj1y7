# TypeScript Type Error Not Caught During Compilation

This repository demonstrates a scenario where a type error in TypeScript is not caught during compilation, leading to a runtime error.  The `add` function is declared to accept two numbers but is called with a number and a string.  TypeScript should ideally throw a type error during compilation, but it does not in this example.

## Bug

The bug lies in the fact that the TypeScript compiler doesn't prevent the addition of a number and a string.  This results in unexpected behavior at runtime.

## Solution

The solution involves using type guards or more strict type checking to ensure that the function receives the correct input types.