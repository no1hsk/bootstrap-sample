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
        "education-schedule": "handleEducationScheduleView"

    },
    handlePortalMainView: function() {
        if(this.portalMain == null){
            this.portalMain = new PortalMainView();
        }
        this.container.contents = this.portalMain;
        this.container.render();
    },
    handlePrivacyPolicyPopupView: function(){
        if(this.privacyPolicyPopup == null){
            this.privacyPolicyPopup = new PrivacyPolicyPopupView();
        }
        if(this.portalMain == null){
            this.handlePortalMainView();
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
            window.location.hash = "#";
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
    el: $('#commonHeader'),
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('common-header.html'));
    }
});

// Drawing HeaderView
var PortalHeaderView =  Backbone.View.extend({
    el: $('#portalHeader'),
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('portal-header.html'));
    }
});

// Drawing FooterView
var FooterView = Backbone.View.extend({
    el: $('footer'),
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
        return this;
    }
});

// Drawing Portal Main
var PortalMainView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('portal-main.html'));
    }
});

var PrivacyPolicyPopupView = Backbone.View.extend({
    render: function(){
        $(this.el).append(GetHtml('popup/privacy-policy-popup.html'));
        return this;
    }
});


var ModalView = function(popupView) {
    var modal = new Backbone.BootstrapModal({
        animate: true,
        content: popupView
    });
    return modal;
};


// Project Views
var ProjectOverviewView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-overview.html'));
    }
});
var ProjectCoreView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-core.html'));
    }
});
var ProjectCodeGeneratorView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-code-generator.html'));
    }
});
var ProjectQueryManagerView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-query-manager.html'));
    }
});
var ProjectOdenView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-oden.html'));
    }
});
var ProjectLogManagerView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-log-manager.html'));
    }
});
var ProjectBatchView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-batch.html'));
    }
});
var ProjectIamView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-iam.html'));
    }
});
var ProjectMonitoringView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('project-monitoring.html'));
    }
});


// Notice View
var NoticeView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('notice.html'));
    }
});


// Education Schedule View
var EducationScheduleView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        $(this.el).append(GetHtml('education-schedule.html'));
    }
});


// Routing Views
$(document).ready(function(){
    var router = new Router();
    Backbone.history.start();
});