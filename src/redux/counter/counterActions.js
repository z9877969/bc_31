import { createAction } from "@reduxjs/toolkit";

export const counterDecrement = createAction("counter/decrement");

export const counterIncrement = createAction("counter/increment");

export const counterReset = createAction("counter/reset");
