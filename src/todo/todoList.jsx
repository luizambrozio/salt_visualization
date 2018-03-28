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

        if(props.checkedHML == 'on' & props.checked == 'on' & props.checkedAF == 'on'){
            console.log('checkedHML e checked e aceite final ')
            listFiltred = filterRowsHML(list2)
            listFiltred = filterRows(listFiltred)
            listFiltred = filterRowsAF(listFiltred)
            return listFiltred
        }

        if(props.checkedHML == 'on' & props.checked == 'on'){
            console.log('checkedHML e checked ')
            listFiltred = filterRowsHML(list2)
            listFiltred = filterRows(listFiltred)
            return listFiltred
        }

        if(props.checkedHML == 'on' & props.checkedAF == 'on'){
            console.log('checkedHML e checked ')
            listFiltred = filterRowsHML(list2)
            listFiltred = filterRowsAF(listFiltred)
            return listFiltred
        }

        if(props.checked == 'on' & props.checkedAF == 'on'){
            console.log('checkedHML e checked ')
            listFiltred = filterRows(list2)
            listFiltred = filterRowsAF(listFiltred)
            return listFiltred
        }


        if(props.checked == 'on'){
            listFiltred = filterRows(list2)
            //console.log('checked')
            return listFiltred
        }

        if(props.checkedAF == 'on'){
            listFiltred = filterRowsAF(list2)
            console.log('checkedAF')
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

     const filterRowsAF = (list) => {
        return list.filter(function(element) {
            return  element.dsSituacao != 'Aguardando aceite final';
        });
    }

    const rederTable = () => {

        const columns = [{
            Header: 'Salt',
            accessor: 'nuSalt' // String-based value accessors!
          }, {
            Header: 'Ciclo',
            accessor: 'nuCiclo',
            PivotValue: ({ value }) =>
                    <span style={{ color: "darkred" }}>
                      {value}
                    </span>          
          }, {
            accessor: 'dsSeveridade', // Required because our accessor is not a string
            Header: 'Severidade'
          },{
            accessor: 'dtRegistro', // Required because our accessor is not a string
            Header: 'Registro'
          },{
            accessor: 'dsSituacao', // Required because our accessor is not a string
            Header: 'Situacao'
          },{
            accessor: 'dtAceito', // Required because our accessor is not a string
            Header: 'Aceito em'
          },{
            accessor: 'dtPrevisto', // Required because our accessor is not a string
            Header: 'Data prevista'
          },{
            accessor: 'dtContrato', // Required because our accessor is not a string
            Header: 'Data contrato'
          },{
            accessor: 'dtPrazoProd', // Required because our accessor is not a string
            Header: 'Prazo produção'
          },{
            accessor: 'nuCliente', // Required because our accessor is not a string
            Header: 'Nº cliente'
            
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