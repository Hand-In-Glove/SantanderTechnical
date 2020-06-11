import React from "react";
import { render } from "@testing-library/react";
import { fizzBuzz } from "./fizzbuzz";

test("return Fizz when 3 divisible by 3", () => {
  let actual = fizzBuzz(3);
  let expected = "Fizz";
  expect(actual).toBe(expected);
});

test("return Fizz when 9 divisible by 3", () => {
  let actual = fizzBuzz(9);
  let expected = "Fizz";
  expect(actual).toBe(expected);
});

test("return Buzz when num divisible by 5", () => {
  let actual = fizzBuzz(10);
  let expected = "Buzz";
  expect(actual).toBe(expected);
});

test("return FizzBuzz when 15 divisible by 3 and 5", () => {
  let actual = fizzBuzz(15);
  let expected = "FizzBuzz";
  expect(actual).toBe(expected);
});

test("return 7 when not divisible by 3 or 5", () => {
  let actual = fizzBuzz(7);
  let expected = 7;
  expect(actual).toBe(expected);
});
