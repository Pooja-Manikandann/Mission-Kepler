import { render } from "@testing-library/react"
import Gallery from "../Gallery"
import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import store from "src/store";

describe('gallery component', () => {
    let useEffect: any;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce((f:any) => f());
      };
    it('render component successfully', () => {
        render(<Provider store={store}><Gallery /></Provider>)
        
        useEffect = jest.spyOn(React, "useEffect");
    })
})