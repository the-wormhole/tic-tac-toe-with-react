import App from '../App.jsx';
import {screen, render} from '@testing-library/react';
import {describe,expect,it} from 'vitest'
import userEvent from '@testing-library/user-event'

describe("App component and functionality testing",() =>{

    it("should display X's turn, the game box and Reset Button",() =>{
        render(<App/>)

        let turn = screen.getByText(/player x turn.../i);
        expect(turn).toBeInTheDocument();

        let gameButtons = screen.queryAllByRole("game-btn");
        gameButtons.forEach((button) => {
            expect(button).toBeInTheDocument();
        })

        let resetBtn = screen.getByText(/reset/i);
        expect(resetBtn).toBeInTheDocument();
    })

    it("should fill box on click",async () =>{
        render(<App/>)

        let user = userEvent.setup();
        let gameButtons = screen.queryAllByRole("game-btn");
        await user.click(gameButtons[0]);

        expect(gameButtons[0].textContent).not.toBe("");
        
    })
})