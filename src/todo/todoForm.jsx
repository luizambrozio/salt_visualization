import React from 'react'

import Grid from '../template/grid'
import Button from '../template/iconButton'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


export default props => {

    const options = [
       {value : 1, label : 'Janeiro'},
       {value : 2, label : 'Fevereiro'},
       {value : 3, label : 'Março'},
       {value : 4, label : 'Abril'},
       {value : 5, label : 'Maio'},
       {value : 6, label : 'Junho'},
       {value : 7, label : 'Junho'},
       {value : 8, label : 'Agosto'},
       {value : 9, label : 'Setembro'},
       {value : 10, label : 'Outubro'},
       {value : 11, label : 'Novembro'},
       {value : 12, label : 'Dezembro'},
      ]


      const sis = props.sist.map(siste => {
        return {value: siste.cdSistema, label: siste.sgSistema}
      })

      
                
      
    return(
        <div role='form' className='todoForm'>

        <Grid cols='12 3 4'>
        <Dropdown options={options}  
            placeholder="Mes"
            onChange={ props.handleChangeMonth }
            />
        </Grid>

        <Grid cols='12 3 1'>
            <input id='month' className='form-control'
                placeholder='mes' 
                onChange={ props.handleChangeMonth }
                value={props.month}/>
        </Grid>

        <Grid cols='12 3 2'>
            <input id='system' className='form-control'
                placeholder='Sistema' 
                onChange={ props.handleChangeSystem }
                value={props.system}/>
        </Grid>

        <Grid cols='12 3 2'>
        <Dropdown options={sis}  
            placeholder="sistema"
            //onChange={ props.handleChangeSystem }
            //value={ props.month }
            />
        </Grid>

        <Grid cols='12 3 1'>
            <input
            name="checked"
            type="checkbox"
            //checked={props.checked}
            onChange={props.handleChangeChecked}
            />
            <label>encerradas</label>
        </Grid>

        <Grid cols='12 3 1'>
            <Button className='btn-block' style='primary' icon='search' disabled={!(props.month && props.system)}
                onClick={() => props.refresh()}/>
        </Grid>

        <Grid cols='12 3 1'>
            <Button className='btn-block' style='primary' icon='trash-o'
                onClick={() => props.clear()}/>
        </Grid>
    </div>
    )    
}
