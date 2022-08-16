import React, { useEffect, useRef } from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import './css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import { filterValueSelector } from '../../features/buttonTabBar/buttonTabBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { tableSelector } from '../../features/table/tableSlice';
import { useNavigate } from "react-router-dom";
import { fetchRods } from "../../features/table/tableSlice";
import { fetchCountries, countriesSelector } from '../../features/newRodPage/newRodPageSlice';



export default function Table(props) {
  const table = useRef('table')
  const countries = useSelector(countriesSelector)
  const filterValue = useSelector(filterValueSelector)
  const dataRods = useSelector(tableSelector);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const options = {
    onRowClick: function (row) {
      navigate("../detailRod", { replace: true });
    }
  };

  useEffect(() => {
    const filterObj = filterValue !== 'All' ? { Type_ID: filterValue } : {}
    table.current.handleFilterData(filterObj);
    // fetch("browse/RodTypes", {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Basic YWxleDphbGV4",
    //     "Content-Type":"application/json"
    //   }
    // }).then(
    //   res => res.json()
    //   ).then((res) => { 
    //   console.log(res)
    // },(error) => {console.log(error)})
  }, [filterValue])

  useEffect(() => {
    
    if(dataRods.length === 0  ) dispatch(fetchRods());
    
    if (countries.length === 0) dispatch(fetchCountries());
  }, [dispatch])

  return (
    <div>
      <BootstrapTable hover data={dataRods} ref={table} options={options}>
        <TableHeaderColumn isKey dataField='Name'>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField='createdBy'>
          Author
        </TableHeaderColumn>
        <TableHeaderColumn dataField='Status'>
          Status
        </TableHeaderColumn>
        <TableHeaderColumn dataField='Type_ID'>
          Fishing rod
        </TableHeaderColumn>
        <TableHeaderColumn dataField='MinTest'>
          Fishing rod min test(gram)
        </TableHeaderColumn>
        <TableHeaderColumn dataField='MaxTest'>
          Fishing rod max test(gram)
        </TableHeaderColumn>
        <TableHeaderColumn dataField='Length'>
          Length(m)
        </TableHeaderColumn>
        <TableHeaderColumn dataField='Price'>
          Price
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}
