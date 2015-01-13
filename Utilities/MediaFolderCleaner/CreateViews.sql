CREATE VIEW [dbo].[umbracoContent] AS
SELECT
    node.id nodeID, 
    cd.versionId as versionID, 
    cd.published as show, 
    node.parentID, 
    node.nodeUser, 
    node.[level], 
    node.sortOrder,                      
    cc.contentType,         
    isnull(cd.templateId,dct.templateNodeId) as templateNodeId, 
    cd.documentUser,                     
    1 as language,                     
    node.createdate as createdate,               
    cd.updateDate,                     
    cd.releasedate,                     
    cd.expiredate,                     
    node.path,                     
    cd.text as nodeName,          
    lower(cd.text) as urlName,       
    versionUser.userName as versionUserName,           
    nodeUser.userName as nodeUserName,           
    ct.alias,         
    ctNode.text as nodeTypeName        
FROM umbracoNode node           
    inner join cmsContent cc on cc.nodeId = node.id     
    inner join cmsDocument cd on cd.nodeId = node.id and published = 1     
    inner join cmsContentType ct on ct.nodeId = cc.contentType     
    inner join umbracoNode ctNode on ctNode.id = ct.nodeId     
    left join cmsDocumentType dct on dct.contentTypeNodeId = ct.NodeId and dct.isDefault = 1    
    left join umbracoUser nodeUser on nodeUser.id = node.nodeUser           
    left join umbracoUser versionUser on versionUser.id = cd.documentUser    
    and node.nodeObjectType = 'C66BA18E-EAF3-4CFF-8A22-41B16D66A972'
    and node.parentID <> -10
GO

CREATE VIEW [dbo].[umbracoContentData] as    
SELECT 
    versionId as versionId, 
    cmsPropertyType.Alias as alias, 
    COALESCE(dataNtext, dataNvarchar, convert(nvarchar(1000), dataDate),convert(nvarchar(1000), dataInt)) as content 
FROM  cmsPropertyData
INNER JOIN cmsPropertyType on cmsPropertyType.id = cmsPropertyData.propertyTypeId
GO