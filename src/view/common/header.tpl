<h1>
    <img src="./img/푸통푸통.png" width="100px"> <span ng-bind="title"></span>
</h1>

<form class="form-horizontal">
    <div class="form-group form-group-lg">
        <input type="text" ng-value="title+'#'+ctrl.page" class="form-control" readonly> 
    </div>
</form>

<div class="row">
    <ul class="nav nav-tabs">
      <li role="presentation" class="{{ctrl.page == 'notice' ? 'active' : ''}}"><a href="#/notice/list">notice</a></li>
      <li role="presentation" class="{{ctrl.page == 'faq' ? 'active' : ''}}"><a href="#/faq/list">faq</a></li>
    </ul>
</div>
