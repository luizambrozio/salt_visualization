import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Button from '../template/iconButton'
import Rows from '../template/rows'
import Grid from '../template/grid'

export default props => {


    const applyFilter = () => {
        const list2 =  props.list.Result || []
        
        var listFiltred = ''

        if(props.checkedHML == 'on' & props.checked == 'on'){
            console.log('checkedHML e checked ')
            listFiltred = filterRowsHML(list2)
            listFiltred = filterRows(listFiltred)
            return listFiltred
        }

        if(props.checked == 'on'){
            listFiltred = filterRows(list2)
            console.log('checked')
            return listFiltred
        }

        if(props.checkedHML == 'on'){
            listFiltred = filterRowsHML(list2)
            console.log('checkedHML')
            return listFiltred
        }
        
        return list2
    }

    const filterRows = (list) => {
        return list.filter(function(element) {
            return  element.dsSituacao != 'Encerrado';
        });
        
    }

    const filterRowsHML = (list) => {
         return list.filter(function(element) {
             return  element.nuCliente != 'HOMOLOGAÇÃO';
         });
     }

    const rederTable = () => {

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

        //applyFilter()

        return <ReactTable data={applyFilter()}  columns={columns} className="-striped -highlight" filterable /> 

    }


    return(
       <div>
           <Grid cols='12 12 12'>
                {rederTable()}
           </Grid>           
       </div>
    )
}