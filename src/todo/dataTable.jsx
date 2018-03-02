import React from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css";

export default props => {
    render() {
        const  data  = props.list.Result || []
        return (
          <div>
            <ReactTable
              //data={data}
              columns={[
                {
                  Header: "Name",
                  columns: [
                    {
                      Header: "First Name",
                      accessor: "firstName"
                    },
                    {
                      Header: "Last Name",
                      id: "lastName",
                      accessor: d => d.lastName
                    }
                  ]
                },
                {
                  Header: "Info",
                  columns: [
                    {
                      Header: "Age",
                      accessor: "age"
                    },
                    {
                      Header: "Status",
                      accessor: "status"
                    }
                  ]
                },
                {
                  Header: 'Stats',
                  columns: [
                    {
                      Header: "Visits",
                      accessor: "visits"
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
            <br />
            <Tips />
            <Logo />
          </div>
        );
      }
 }
