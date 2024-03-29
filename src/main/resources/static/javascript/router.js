/**
 * Created by Hahn on 2015-11-04.
 */


// Drawing Portal Main
// Set Router
var Router = Backbone.Router.extend({

    commonHeader: null,
    portalHeader: null,
    footer: null,
    container: null,
    portalMain: null,
    signUp: null,
    login: null,
    myPage: null,
    passwordValidationPopup: null,
    privacyPolicyPopup: null,
    projectOverview: null,
    projectCore: null,
    projectCodeGenerator: null,
    projectQueryManager: null,
    projectOden: null,
    projectLogManager: null,
    projectBatch: null,
    projectIam: null,
    projectMonitoring: null,
    notice: null,
    noticeEditor: null,
    educationSchedule: null,

    initialize: function(){
        this.commonHeader = new CommonHeaderView();
        this.portalHeader = new PortalHeaderView();
        this.footer = new FooterView();
        this.container = new ContainerView({
            el: $("#mainContents")
        });
    },
    routes: {
        "": "handlePortalMainView",
        "sign-up": "handlePortalSignUpView",
        "login": "handlePortalLoginView",
        "login/popup": "handlePortalLoginPopupView",
        "my-page/:userId": "handleMyPageView",
        "privacy-policy": "handlePrivacyPolicyPopupView",
        "project": "handleProjectOverviewView",
        "project/core": "handleProjectCoreView",
        "project/code-generator": "handleProjectCodeGeneratorView",
        "project/query-manager": "handleProjectQueryManagerView",
        "project/oden": "handleProjectOdenView",
        "project/log-manager": "handleProjectLogManagerView",
        "project/batch": "handleProjectBatchView",
        "project/iam": "handleProjectIamView",
        "project/monitoring": "handleProjectMonitoringView",
        "notice": "handleNoticeView",
        "notice/editor": "handleNoticeEditorView",
        "notice/editor/:noticeId": "handleNoticeEditorView",
        "education-schedule": "handleEducationScheduleView"

    },
    handlePortalMainView: function() {
        if(this.portalMain == null){
            this.portalMain = new PortalMainView();
        }
        this.container.contents = this.portalMain;
        this.container.render();
    },
    handlePortalSignUpView: function(){
        if(this.signUp == null){
            this.signUp = new SignUpView();
        }
        this.container.contents = this.signUp;
        this.container.render();
    },
    handlePortalLoginView: function(){
        if(this.login == null){
            this.login = new LoginView();
        }
        this.container.contents = this.login;
        this.container.render();
    },
    handlePortalLoginPopupView: function(){
        if(this.container.contents == null){
            window.location.hash = 'login';
        }else{
            if(this.loginPopup == null){
                this.loginPopup = new LoginView();
            }
            var modal = new Backbone.BootstrapModal({
                content: this.loginPopup,
                title: 'Login',
                animate: true,
                allowHeaderCancel: true,
                showFooter: false,
                height: '430px'
            });
            modal.open();
        }
    },
    handleMyPageView: function(userId){
        if(this.myPage == null){
            this.myPage = new MyPageView(userId);
        }
        this.container.contents = this.myPage;
        this.container.render();
    },
    handlePrivacyPolicyPopupView: function(){
        var isDirectLink = false;
        if(this.privacyPolicyPopup == null){
            this.privacyPolicyPopup = new PrivacyPolicyPopupView();
        }
        if(this.container.contents == null){
            this.handlePortalMainView();
            isDirectLink = true;
        }
        var modal = new Backbone.BootstrapModal({
            content: this.privacyPolicyPopup,
            title: '개인정보 취급방침',
            animate: true,
            allowHeaderCancel: true,
            allowCancel: false,
            okText: '확인',
            template: ReadOnlyPopupTemplate
        });
        modal.open(function(){
            if(isDirectLink){
                window.location.hash = "#";
            }else{
                window.history.back();
            }
        });
    },
    handleProjectOverviewView: function(){
        if(this.projectOverview == null){
            this.projectOverview = new ProjectOverviewView();
        }
        this.container.contents = this.projectOverview;
        this.container.render();
    },
    handleProjectCoreView: function(){
        if(this.projectCore == null){
            this.projectCore = new ProjectCoreView();
        }
        this.container.contents = this.projectCore;
        this.container.render();
    },
    handleProjectCodeGeneratorView: function(){
        if(this.projectCodeGenerator == null){
            this.projectCodeGenerator = new ProjectCodeGeneratorView();
        }
        this.container.contents = this.projectCodeGenerator;
        this.container.render();
    },
    handleProjectQueryManagerView: function(){
        if(this.projectQueryManager == null){
            this.projectQueryManager = new ProjectQueryManagerView();
        }
        this.container.contents = this.projectQueryManager;
        this.container.render();
    },
    handleProjectOdenView: function(){
        if(this.projectOden == null){
            this.projectOden = new ProjectOdenView();
        }
        this.container.contents = this.projectOden;
        this.container.render();
    },
    handleProjectLogManagerView: function(){
        if(this.projectLogManager == null){
            this.projectLogManager = new ProjectLogManagerView();
        }
        this.container.contents = this.projectLogManager;
        this.container.render();
    },
    handleProjectBatchView: function(){
        if(this.projectBatch == null){
            this.projectBatch = new ProjectBatchView();
        }
        this.container.contents = this.projectBatch;
        this.container.render();
    },
    handleProjectIamView: function(){
        if(this.projectIam == null){
            this.projectIam = new ProjectIamView();
        }
        this.container.contents = this.projectIam;
        this.container.render();
    },
    handleProjectMonitoringView: function(){
        if(this.projectMonitoring == null){
            this.projectMonitoring = new ProjectMonitoringView();
        }
        this.container.contents = this.projectMonitoring;
        this.container.render();

    },
    handleNoticeView: function(){
        if(this.notice == null){
            this.notice = new NoticeView();
        }
        this.container.contents = this.notice;
        this.container.render();
    },
    handleNoticeEditorView: function(noticeId){
        if(this.noticeEditor == null){
            this.noticeEditor = new NoticeEditorView(noticeId);
        }
        this.container.contents = this.noticeEditor;
        this.container.render();
    },
    handleEducationScheduleView: function(){
        if(this.educationSchedule == null){
            this.educationSchedule = new EducationScheduleView();
        }
        this.container.contents = this.educationSchedule;
        this.container.render();
    }

});

// Drawing HeaderView
var CommonHeaderView =  Backbone.View.extend({
    el: $('.common-header'),
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('common-header.html'));
    }
});

// Drawing HeaderView
var PortalHeaderView =  Backbone.View.extend({
    el: $('.portal-header'),
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('portal-header.html'));
    }
});

// Drawing FooterView
var FooterView = Backbone.View.extend({
    el: $('.portal-footer'),
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('footer.html'));
    }

});

var ContainerView = Backbone.View.extend({
    contents: null,
    render: function(){
        this.$el.html(this.contents.$el);
        $(document).scrollTop(0);
        this.contents.render();
        return this;
    }
});

// Drawing Portal Main
var PortalMainView = Backbone.View.extend({
    html: 'portal-main.html',
    initialize: function(){
    },
    render: function(){
        $(this.el).html(GetHtml(this.html));
    }
});

var PrivacyPolicyPopupView = Backbone.View.extend({
    html: 'popup/privacy-policy-popup.html',
    initialize: function(){
    },
    render: function(){
        $(this.el).html(GetHtml(this.html));
    }
});

// Routing Views
$(document).ready(function(){
    var router = new Router();
    Backbone.history.start();
});