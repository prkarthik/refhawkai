import React, { Component } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default class DataSources extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableData:[],
            tableColumns:[],
            msg:'1'
            
        }
        this.fetchData = this.fetchData.bind(this);
        this.graphMaker= this.graphMaker.bind(this);
    
    }
    componentWillMount(){
        

    }

    componentWillReceiveProps(nextProps){
        

    }
    fetchData() {
        let urlID = this.props.rowId;
        let sheetId = urlID+ this.props.sheetId;
         let url = 'https://hawkaidata.net/api/data.php/home/getSheetHeaderAndData/'+urlID+'/'+sheetId;
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({tableData:json.data,tableColumns:json.columns}))
      
    }
    graphMaker (state, rowInfo, column, instance) {

      let headersToPost = [];
      headersToPost.push(column.Header);
      headersToPost.push(this.props.rowId);
    //    url =  "http://hawkaidata.net/api/execCommand.php?fileId="+headersToPost[1]+"&command="+headersToPost[0];
    //   let parameters = "fileId="+headersToPost[1]+'&command'+headersToPost[0];

      // api call
      /*
      var xhr = new XMLHttpRequest();
      xhr.open("Get", url, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(parameters);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
           if (xhr.status === 200){
                console.log(xhr.responseText);
           } else{
              console.log('Oops! Something went wrong', xhr.statusText);
           } 
        } 
      }
      */

      return {
          onClick: e => {
              console.log('A Td Element was clicked!')
              console.log('it produced this event:', e)
              console.log('It was in this column:', column,'12121',column.Header)
              console.log('It was in this row:', rowInfo)
              console.log('It was in this table instance:', instance)
          }
      }
  }
    render() {
        const tableColumns = [{
            Header: 'ID',
            accessor: 'userIdx',
           
          }, {
            Header: 'Site',
            accessor: 'sheetzIdx',
           
         
          },
          {
            Header: 'Type',
            accessor: 'url',
            
          },
          {
            Header: 'Country',
            accessor: 'name',
          
          } ]
        return (
            <div>
                    <h2>Source Table</h2>
                    <ReactTable
                                     
                                      data={this.state.tableData}
                                      columns={tableColumns}
                                      defaultPageSize={3}
                                      showPagination={false}
                                      onFetchData={this.fetchData} 
                                      getTheadThProps={this.graphMaker}
                                      
                                    />
            </div>
        )
    }
}
