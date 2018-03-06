import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Button from '../template/iconButton'
import Rows from '../template/rows'
import Grid from '../template/grid'

export default props => {


    const applyFilter = (list) => {
        
    }

    const filterRows = (list) => {

       // let listFiltred =1

        return list.filter(function(element) {
            return  element.dsSituacao != 'Encerrado';
        });
    }

    const filterRowsHML = (list) => {
 
         return list.filter(function(element) {
             return  element.nuCliente != 'HOMOLOGAÇÃO';
         });
     }

    const renderRows = () => {
        

        const list2 =  props.list.Result || []

        if(props.checked == 'on'){
            var listFiltred = filterRows(list2)

            return listFiltred.map(SALTS => (
                <tr key={SALTS.nuSalt}>
                    <td>{SALTS.nuSalt}</td>
                    <td>{SALTS.nuCiclo}</td>
                    <td>{SALTS.dsSeveridade}</td>
                    <td>{SALTS.dtRegistro}</td>
                    <td>{SALTS.dsSituacao}</td>
                    <td>{SALTS.dtAceito}</td>
                    <Rows getColor={SALTS.dtPrevisto} >{SALTS.dtPrevisto}</Rows>
                    <td>{SALTS.nuCliente}</td>
                </tr>
            ))
        }
                
        return list2.map(SALTS => (
            <tr key={SALTS.nuSalt}>
                <td>{SALTS.nuSalt}</td>ok
                <td>{SALTS.nuCiclo}</td>ok
                <td>{SALTS.dsSeveridade}</td>ok
                <td>{SALTS.dtRegistro}</td>ok
                <td>{SALTS.dsSituacao}</td>ok
                <td>{SALTS.dtAceito}</td>
                <Rows getColor={SALTS.dtPrevisto} >{SALTS.dtPrevisto}</Rows>
                <td>{SALTS.nuCliente}</td>
            </tr>
        ))
    }

    const rederTable = () => {

        const data =  props.list.Result || []

        const columns = [{
            Header: 'nuSalt',
            accessor: 'nuSalt' // String-based value accessors!
          }, {
            Header: 'nuCiclo',
            accessor: 'nuCiclo',
            PivotValue: ({ value }) =>
                    <span style={{ color: "darkred" }}>
                      {value}
                    </span>          
          }, {
            accessor: 'dsSeveridade', // Required because our accessor is not a string
            Header: 'dsSeveridade'
          },{
            accessor: 'dtRegistro', // Required because our accessor is not a string
            Header: 'dtRegistro'
          },{
            accessor: 'dsSituacao', // Required because our accessor is not a string
            Header: 'dsSituacao'
          },{
            accessor: 'dtAceito', // Required because our accessor is not a string
            Header: 'dtAceito'
          },{
            accessor: 'dtPrevisto', // Required because our accessor is not a string
            Header: 'dtPrevisto'
          },{
            accessor: 'nuCliente', // Required because our accessor is not a string
            Header: 'nuCliente'
            
          }
        ]

        if(props.checked == 'on'){
            var listFiltred = filterRows(data)
            return <ReactTable data={listFiltred}  columns={columns} className="-striped -highlight" filterable/> 
        }

        return <ReactTable data={data}  columns={columns} className="-striped -highlight" filterable /> 

    }


    return(
       <div>
           <Grid cols='12 12 12'>
                {rederTable()}
           </Grid>           
       </div>
    )
}