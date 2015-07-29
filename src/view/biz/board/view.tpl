<h1 ng-bind="title"></h1>
<table class="table">
    <tr>
        <th>번호</th><td ng-bind="view.no"></td>
    </tr>
    <tr>
        <th>제목</th><td ng-bind="view.title"></td>
    </tr>
    <tr>
        <th>등록일</th><td>2015.{{item.no}}.01.</td>
    </tr>
</table>
<div>
	<a href="#/{{ctrl.page}}/list"><span class="glyphicon glyphicon-backward"></span> 목록으로</a>
</div>