<h1 ng-bind="title"></h1>
<table class="table">
    <tr>
        <th>번호</th>
        <th>파일</th>
        <th>등록일</th>
    </tr>
    <tr ng-repeat="item in list">
        <td ng-bind="item.no"></td>
        <td>제목-{{item.no}}.mp3</td>
        <td>2015.{{item.no}}.01.</td>
    </tr>
</table>