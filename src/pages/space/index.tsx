/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/
import { Column } from 'bkui-vue/lib/table/props';
import { defineComponent } from 'vue';
import { Table, Popover2 } from 'bkui-vue';
console.log(Popover2);
export default defineComponent({
  name: 'SpaceList',
  setup() {
    const renderCell = (cell: any) => <span>自定义渲染 column ：{ cell }</span>;
    const DATA_COLUMNS = [
      {
        label: '序号',
        type: 'index',
        sort: true,
        width: 100,
      },
      {
        label: '名称/内网IP',
        field: 'ip',
        width: 100,
      },
      {
        label: '来源',
        field: 'source',
        width: 80,
        filter: {
          list: [{ text: 'QQ', value: 'QQ' }, { text: '微信', value: '微信' }, { text: 'Email', value: 'Email' }],
        },
      },
      {
        label: '创建时间',
        field: 'create_time',
        sort: true,
      },
      {
        label: (column: Record<string, string>, index: number) => `状态-${index}-${column.field}`,
        field: 'status',
        sort: true,
      },
    ];
    const DATA_TABLE = [
      {
        ip: 'from ip: 192.168.0.1',
        source: 'QQ',
        status: '创建中',
        create_time: '2018-05-25 15:02:241',
      },
      {
        ip: '192.168.0.2',
        source: '微信',
        status: '正常',
        create_time: '2018-05-25 15:02:242',

      },
      {
        ip: '192.168.0.3',
        source: 'QQ',
        status: '创建中',
        create_time: '2018-05-25 15:02:243',
      },
      {
        ip: '192.168.0.3',
        source: 'QQ',
        status: '创建中',
        create_time: '2018-05-25 15:02:244',
      },
      {
        ip: '192.168.0.3',
        source: 'QQ',
        status: '创建中',
        create_time: '2018-05-25 15:02:24',
      },
    ];
    return {
      test: 'fdd',
      tableData: [...DATA_TABLE],
      columns: [...DATA_COLUMNS].map((col: Column) => ({ ...col, render: renderCell })),
    };
  },
  render() {
    return (
        <div>
          <Table
              columns={ this.columns }
              data={ this.tableData }
          />
        </div>
    );
  },

});
