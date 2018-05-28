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
            dataCollection: []
        };
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(({ data }) => {
                console.log(data);
                this.setState(
                    { array: data }
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
        // const { data } = this.state;
        //console.log(this.state.array);
        return(<div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "name",
                  accessor: "name"
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