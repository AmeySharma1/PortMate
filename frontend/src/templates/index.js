import MinimalTemplate   from './MinimalTemplate';
import DeveloperTemplate from './DeveloperTemplate';
import ModernTemplate    from './ModernTemplate';
import GlassTemplate     from './GlassTemplate';

const templates = {
  minimal:      MinimalTemplate,
  developer:    DeveloperTemplate,
  modern:       ModernTemplate,
  glass:        GlassTemplate,
  // aliases so existing portfolios with these template names still work
  professional: MinimalTemplate,
  creative:     GlassTemplate,
};

export default templates;
