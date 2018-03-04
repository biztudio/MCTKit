/*jshint esversion: 6 */
import React from 'react';
import sudokukit from 'sudokukit';
import './sudoku.css';

export class SudokuTag extends React.Component{
   
    getsudokugrids(){        
        let _grids = [];
        let _sudokuPuzzle = sudokukit.getSudokuPuzzle(this.props.level).SudokuPuzzle;
        let x_axis_length = 3;
        let y_axis_length = 3;
        let gp = x_axis_length * y_axis_length;
        let top_pos = 2;
        let left_pos = 2;
        let grid_init_indes = sudokukit.getStartIndesInGrids(_sudokuPuzzle)
        for (let g = 0; g < gp; g++) {
            let grid = [];
            let grid_init_index = grid_init_indes[g]
            let grid_indes = sudokukit.getIndexListInGrid(grid_init_index)
            let grid_cell_value_list = []
            for (let grid_index of grid_indes) {
                grid_cell_value_list.push(_sudokuPuzzle[grid_index])
            }
            for (let y_axis_index = 0; y_axis_index < y_axis_length; y_axis_index++) {
                let row = [];
                for (let x_axis_index = 0; x_axis_index < x_axis_length; x_axis_index++) {
                    if (grid_cell_value_list.length > 0) {
                        let letter = grid_cell_value_list.shift();
                        row.push(letter)
                    }
                }
                grid.push(row);
            }
            let top = (top_pos + 155 * parseInt(g / 3));
            let left = (left_pos + 155 * ((g) % 3));
            let styleObject = {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '25px',
                position: 'absolute',
                top: (top + 'px'),
                left: (left + 'px')
            };
            _grids.push({ data: grid, style_config: styleObject });
        }
        return _grids.slice(0);
    }

    render(){        
        let _grids = this.getsudokugrids();
        let cell_style = {
            width: '50px', height: '50px', 
            textAlign:'center', 
            position: 'relative', 
            top: '5px'
        }

        let td_style = { border:'solid#0066CC 1px' }
        let span_answer = {fontStyle:'oblique', color:'gray'}

        let grids_div = [];
        let keycell = 0;
        for(let g of _grids){
            let tr = []
            for(let h of g.data){
                let td = []
                for(let r of h){

                    let span_tag = ( <span> { r.display }</span>);
                    
                    if(r.display <= 0){
                        if(this.props.mode >0){
                            span_tag = <span style={span_answer} >{r.value}</span>
                        }
                        else{
                            // onKeyPress='return event.charCode >= 49 && event.charCode <= 57'
                            span_tag = <span><input type="text" maxLength="1" className="sudoku_input"/></span>
                        }                        
                    }

                    td.push(<td style={td_style} key={keycell}>
                                <div style={cell_style}>{span_tag}</div>
                            </td>);
                    keycell++;        
                }
                tr.push(<tr key={keycell}>{td}</tr>)
            }
            grids_div.push(<div style={g.style_config} key={keycell}> 
                <table className="grid_container">
                    <tbody>{tr}</tbody>
                </table>
            </div>)
        }

        let sudokuBackgroudStyle = {
            backgroundColor:'#0066CC',
            width:'475px',
            height:'475px',
            //position: 'relative', 
            //top: '15px'
        };
        
        return(
            <div>
                <div style={sudokuBackgroudStyle}>{grids_div}</div>
            </div>            
        );
    }
}