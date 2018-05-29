import React, {Component}from 'react';
import ReactTable from 'react-table'
import Content from './Content';

class Home extends Component{
    constructor(props) {
        super(props);
        {console.log(props)}
        this.state = {
          
            fetchedData: this.props,
          };
    }
    render(){
        const uData2=this.props.grade;
        console.log(uData2)
        return (
            <div> 
                Hello you are Home!!
                <ReactTable
          data={uData2}
          columns={[
            {
              Header: "User Details",
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Username",
                  id: "userName",
                  accessor: d => d.username

                },{
                  Header: "Email",
                  accessor: "email"
                },{
                  Header: "Phone",
                  accessor: "phone"
                },{
                  Header: "Website",
                  accessor: "website"
                }
              ]
            },
            {
              Header: "Company Info",
              columns: [
                {
                  Header: "Name",
                  accessor: "company.name"
                },
                {
                  Header: "Service",
                  accessor: "company.bs"
                }
              ]
            },
            {
              Header: 'Address',
              columns: [
                {
                  Header: "City",
                  accessor: "address.city"
                },{
                  Header: "Streat",
                  accessor: "address.street"
                },{
                  Header: "Suite",
                  accessor: "address.suite"
                }
              ]
            }
          ]}
          
          className="-striped -highlight"
        />
            </div>
        );
    }
    
}
export default Home;