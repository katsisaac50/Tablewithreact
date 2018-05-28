import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table'
import "react-table/react-table.css";

// import $ from 'jquery';
import BootstrapTable from 'reactjs-bootstrap-table';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
          userData: []
        };
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(({ data }) => {
                console.log(data);
                this.setState(
                    { userData: data }
                );
            })
            .catch(function (error) {
                console.log(error);
            });
            // $.ajax({
            //     url:'http://localhost:3000/user.json',
            //     dataType:'json',
            //     cache: false,
            //     success: function(data){
            //       this.setState({ array: data });
            //     }.bind(this),
            //     error: function(xhr, status, err){
            //       console.log(err);
            //       alert(err);
            //     }
            //   });

    }
    render() {
     
  //Store data in uData
         const uData  = this.state.userData;
       // console.log(this.state.userData);
       
        return(<div>
        <ReactTable
          data={uData}
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
       
      </div>)
//         return (
//             <div>
//                 <div></div>
//                 <h3>User Details</h3>
//                 <ul >
//                     {this.renderCompany()}
//                 </ul>

//             </div>
//         );
//     }
//     renderCompany() {
//         const compData = this.state.array;
//         return compData.map(userData => {
//             console.log(userData);
//             return (
//                 <div>
//                     <tr>
//                         {/* <td>{company.username}</td> */}
                       
//                         <td>{userData.name}</td>
//                     </tr>
//                     {/* <ul>
//                         <li className="list-group-item" key={company.name}>
//                             {company.name}
//                         </li>
//                     </ul> */}
//                 </div>
//             );
//         });
    }


}

export default Content;