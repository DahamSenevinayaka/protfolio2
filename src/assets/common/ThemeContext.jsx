import React, { createContext, crerateContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () =>useContext(ThemeContext);